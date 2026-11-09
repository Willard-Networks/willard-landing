// Run against a production build: node scripts/check-vuetify-browser.mjs <url> <unique-session>
// Requires the separately installed agent-browser CLI; never uses its shared default session.
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

const [url, session] = process.argv.slice(2);
assert.ok(url && session, "Supply a build URL and a unique browser session");
function browser(...args) {
  const result = spawnSync("agent-browser", ["--session", session, "--json", ...args], {
    encoding: "utf8",
  });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  const response = JSON.parse(result.stdout);
  assert.ok(response.success, JSON.stringify(response));
  return response.data;
}
function evaluate(script) {
  return browser("eval", script).result;
}

try {
  browser("open", url);
  browser("set", "viewport", "1440", "1000");
  browser("wait", "--fn", 'document.fonts.status === "loaded"');
  const desktop = evaluate(`(() => {
    const style = s => getComputedStyle(document.querySelector(s));
    return {
      rowMargin: style('#intro').marginTop,
      rowGap: style('#intro').columnGap,
      headingMargin: style('#newcomers h1').marginTop,
      paragraphMargin: style('#newcomers p').marginTop,
      buttonSize: style('.navbar button.v-btn--size-default:not(.v-btn--icon)').fontSize,
      faqSize: style('.v-expansion-panel-title').fontSize,
      faqLineHeight: style('.v-expansion-panel-title').lineHeight,
      faqHeadingMargin: style('.v-expansion-panel-title h3').marginTop,
      faqSubtitleMargin: style('#faq h2').marginBottom,
      colWidth: document.querySelector('#newcomers > div').getBoundingClientRect().width,
      overflow: document.documentElement.scrollWidth > innerWidth,
    };
  })()`);
  assert.deepEqual(desktop, {
    rowMargin: "-12px",
    rowGap: "normal",
    headingMargin: "0px",
    paragraphMargin: "0px",
    buttonSize: "14px",
    faqSize: "15px",
    faqLineHeight: "15px",
    faqHeadingMargin: "0px",
    faqSubtitleMargin: "32px",
    colWidth: 366,
    overflow: false,
  });
  for (const width of [599, 600, 900, 959, 960, 1200, 1279, 1280]) {
    browser("set", "viewport", String(width), "1000");
    const col = evaluate(`(() => {
      const el = document.querySelector('#newcomers > div');
      const rect = el.getBoundingClientRect();
      return { width: rect.width, x: rect.x, padding: getComputedStyle(el).paddingLeft };
    })()`);
    const columns = width < 960 ? 12 : width < 1280 ? 5 : 3;
    const offset = width < 960 ? 0 : width < 1280 ? 1 : 2;
    assert.ok(
      Math.abs(col.width - ((width + 24) * columns) / 12) < 0.02,
      `Column width at ${width}`,
    );
    assert.ok(
      Math.abs(col.x - (-12 + ((width + 24) * offset) / 12)) < 0.02,
      `Column offset at ${width}`,
    );
    assert.equal(col.padding, width < 960 ? "32px" : "12px");
    const visible = evaluate(
      `Array.from(document.querySelectorAll('.navbar .v-btn')).filter(el => getComputedStyle(el).display !== 'none').length`,
    );
    assert.equal(visible, width < 600 ? 1 : 8, `Toolbar breakpoint at ${width}`);
  }
  browser("set", "viewport", "390", "844");
  assert.equal(
    evaluate(
      `Array.from(document.querySelectorAll('.navbar .v-btn')).filter(el => getComputedStyle(el).display !== 'none').length`,
    ),
    1,
    "Mobile toolbar must hide desktop links and retain the drawer button",
  );
  for (const width of [1440, 390]) {
    browser("set", "viewport", String(width), "1000");
    for (const [index, id] of ["newcomers", "gameplay", "lore", "faq"].entries()) {
      browser("click", ".v-app-bar-nav-icon");
      browser("wait", ".v-navigation-drawer--active");
      browser("find", "nth", String(index), ".v-navigation-drawer .v-list-item", "click");
      browser(
        "wait",
        "--fn",
        `!document.querySelector('.v-navigation-drawer--active') && Math.abs(document.querySelector('#${id}').getBoundingClientRect().top) < 2`,
      );
    }
    for (let index = 1; index <= 4; index++) {
      const selector = `.v-expansion-panel:nth-child(${index}) .v-expansion-panel-title`;
      browser("scrollintoview", selector);
      browser("click", selector);
      browser(
        "wait",
        "--fn",
        `document.querySelector('${selector}').getAttribute('aria-expanded') === 'true' && document.querySelectorAll('.v-expansion-panel--active').length === 1`,
      );
      assert.ok(
        evaluate(
          `document.querySelector('.v-expansion-panel--active .v-expansion-panel-text').innerText.length > 40`,
        ),
      );
    }
    browser("press", "Enter");
    browser("wait", "--fn", "document.querySelectorAll('.v-expansion-panel--active').length === 0");
    assert.equal(evaluate("document.documentElement.scrollWidth > innerWidth"), false);
  }
  console.log("Vuetify production-browser compatibility assertions passed");
} finally {
  browser("close");
}
