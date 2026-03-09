<template>
  <v-row
    id="intro"
    class="wrapper overflow-hidden"
    align="center"
  >
    <v-col class="pl-8 pl-md-3">
      <v-card
        class="intro-content mx-auto mb-12"
        variant="flat"
        color="transparent"
      >
        <v-img
          alt="HL2RP"
          class="mb-12 mx-auto"
          width="128"
          src="https://willard.network/hl2rp_imgs/logo.svg"
        ></v-img>
        <h1 class="mb-6">Willard Networks</h1>
        <div class="d-none d-sm-block">
          <v-btn
            @click="scrollTo('#newcomers')"
            variant="text"
          >New arrivals</v-btn>
          <v-btn
            @click="scrollTo('#gameplay')"
            variant="text"
          >HL2RP Gameplay</v-btn>
          <v-btn
            @click="scrollTo('#lore')"
            variant="text"
          >Lore</v-btn>
          <v-btn
            @click="scrollTo('#team')"
            variant="text"
          >The team</v-btn>
        </div>
        <div class="mt-12 pt-6">
          <v-btn
            href="https://willard.network/forums/"
            class="body-1 py-5"
            rounded="0"
            variant="outlined"
            color="primary"
            size="x-large"
            append-icon="mdi-arrow-right"
          >Visit forums</v-btn>
        </div>
      </v-card>
    </v-col>
    <div class="parallax">
      <video
        class="bg-vid"
        autoplay
        muted
        loop
      >
        <source
          src="https://willard.network/hl2rp_imgs/gman_vid.mp4"
          type="video/mp4"
        >
      </video>
    </div>
  </v-row>
</template>
<script>
export default {
  name: 'Intro',
  methods: {
    scrollTo (selector) {
      const el = document.querySelector(selector)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>
<style lang="scss">
#intro {
  .intro-content {
    text-align: center;
    z-index: 1;
    h1 {
      font-size: 5rem;
      font-family: "Source Sans Pro", sans-serif;
      text-transform: uppercase;
      letter-spacing: 10px;
      color: white;
      line-height: 1;
    }
    .v-btn {
      font-family: "Source Sans Pro", sans-serif;
      text-transform: uppercase;
      font-size: 1.4rem;
      letter-spacing: 6px;
      color: rgb(196, 196, 196);
      &:hover {
        color: white;
      }
    }
  }
  .parallax {
    .bg-vid {
      width: 100%;
      background-color: rgba(34, 32, 64);
    }
    position: fixed;
    &:before {
      content: "";
      background-color: rgba(34, 32, 64, 0.5);
      z-index: 3;
    }
  }
}
@media (max-width: 450px) {
  #intro {
    .intro-content {
      h1 {
        font-size: 2.8rem;
      }
    }
  }
}

@media (max-width: 1600px) {
  #intro {
    .parallax {
      transform: scale(1);
      -webkit-transform: scale(1);
      -o-transform: scale(1);
      .bg-vid {
        width: unset !important;
        max-width: unset !important;
        min-height: 100vh;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>
