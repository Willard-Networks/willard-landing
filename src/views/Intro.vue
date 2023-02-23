<template>
  <v-row
    id="intro"
    class="wrapper overflow-hidden"
    align="center"
  >
    <v-col class="pl-8 pl-md-3">
      <v-card
        class="intro-content mx-auto transparent mb-12"
        flat
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
            @click="$vuetify.goTo('#newcomers', options)"
            text
          >New arrivals</v-btn>
          <v-btn
            @click="$vuetify.goTo('#gameplay', options)"
            text
          >HL2RP Gameplay</v-btn>
          <v-btn
            @click="$vuetify.goTo('#lore', options)"
            text
          >Lore</v-btn>
          <v-btn
            @click="$vuetify.goTo('#team', options)"
            text
          >The team</v-btn>
        </div>
        <div class="mt-12 pt-6">
          <v-btn
            href="https://willard.network/forums/"
            class="body-1 py-5"
            tile
            outlined
            color="primary"
            x-large
          >
            Visit forums<v-icon class="ml-1">mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </v-card>
    </v-col>
    <div class="parallax">
      <!-- <video
        class="bg-vid"
        :poster="getPoster()"
        v-on-intersect="{topOffset: loadOffset, bottomOffset: loadOffset, once: !pauseOnExit}"
        ref="video"
        preload="none"
        v-on:loadeddata="loaded = true"
        v-on:play="playing = true"
        v-on:pause="playing = false"
        v-bind="attrs"
        autoplay
        loop
      >
        <source
          v-for="(source, i) in videoSources"
          :src="require('@/assets/gman_vid.mp4')"
          :key="i"
        />
      </video> -->

      <!-- <LazyVideo
          v-bind="attrs"
          class="bg-vid"
          :src="require('@/assets/gman_vid.mp4')"
          :poster="require('@/assets/gman.jpg')"
        /> -->
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
  name: 'LazyVideo',
  data () {
    return {
      isIntersecting: null,
      loaded: false,
      playing: false,
      posterLoaded: false
    }
  },
  props: {
    poster: String,
    src: {
      type: String,
      required: false
    },
    sources: {
      type: Array,
      required: false
    },
    attrs: {
      type: Object,
      required: false,
      default: function () {
        return {
          controls: false,
          playsinline: true,
          loop: true,
          autoplay: true,
          muted: false
        }
      }
    },
    loadOffset: {
      default: '50%',
      required: false,
      type: String
    },
    pauseOnExit: {
      default: true,
      required: false,
      type: Boolean
    }
  },
  computed: {
    videoSources () {
      return this.sources || [this.src]
    }
  },
  methods: {
    getPoster () {
      if (this.isIntersecting && !this.posterLoaded) {
        this.posterLoaded = true
        return this.poster
      } else if (this.posterLoaded) {
        return this.poster
      } else {
        return ''
      }
    }
  },
  watch: {
    loaded (isLoaded) {
      if (isLoaded) {
        this.$emit('loaded')
      }
    },
    isIntersecting (isIntersecting, wasIntersecting) {
      // when out of view pause video
      if (wasIntersecting && this.playing && this.pauseOnExit) {
        this.$refs.video.pause()
      }
      // load if video is intersecting
      if (isIntersecting && !this.loaded) {
        this.$refs.video.load()
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
