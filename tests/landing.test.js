import { beforeAll, describe, expect, it } from "vite-plus/test";
import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";
import { createMemoryHistory, createRouter } from "vue-router";
import Home from "../src/views/Home.vue";
import App from "../src/App.vue";
import vuetify from "../src/plugins/vuetify";

describe("landing page dependency compatibility", () => {
  let html;

  beforeAll(async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [{ path: "/", component: Home }],
    });
    await router.push("/");
    await router.isReady();
    const app = createSSRApp(App);
    app.use(router);
    app.use(vuetify);
    html = await renderToString(app);
  });

  it("renders the landing page with Vue, Vue Router and Vuetify", () => {
    expect(html).toContain("WILLARD NETWORKS");
    expect(html).toContain("v-theme--dark");
  });

  it("keeps the navigation targets and FAQ panels", () => {
    for (const id of ["newcomers", "gameplay", "lore", "faq"]) {
      expect(html).toContain(`id="${id}"`);
    }
    expect(html).toContain("What makes Willard Networks different");
    expect(html).toContain("v-expansion-panel-title");
  });

  it("retains community links and Material Design icons", () => {
    expect(html).toContain('href="https://willard.network/forums/"');
    expect(html).toContain('href="https://discord.gg/HbDjUQd"');
    expect(html).toContain("mdi-steam");
  });
});
