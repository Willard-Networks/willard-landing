<template>
  <v-card
    flat
    tile
    class="mx-auto"
  >
    <v-app-bar
      class="navbar"
      flat
      dark
      fixed
      height="50"
      color="rgba(0,0,0,0)"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>WILLARD NETWORKS</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
        @click="$vuetify.goTo('#newcomers', options)"
        class="d-none d-sm-flex"
        depressed
        text
      >
        New arrivals
      </v-btn>
      <v-btn
        @click="$vuetify.goTo('#gameplay', options)"
        class="d-none d-sm-flex"
        depressed
        text
      >
        HL2RP Gameplay
      </v-btn>
      <v-btn
        @click="$vuetify.goTo('#lore', options)"
        class="d-none d-sm-flex"
        depressed
        text
      >
        Lore
      </v-btn>
      <v-btn
        @click="$vuetify.goTo('#team', options)"
        class="d-none d-sm-flex"
        depressed
        text
      >
        The team
      </v-btn>
      <v-divider vertical></v-divider>
      <v-btn
        href="https://willard.network/forums/"
        class="d-none d-sm-flex"
        depressed
        text
      >
        Forums
      </v-btn>
      <v-btn
        @click="$vuetify.goTo('#faq', options)"
        class="d-none d-sm-flex"
        depressed
        text
      >
        FAQ
      </v-btn>
      <v-divider vertical></v-divider>
      <v-btn
        href="https://discord.gg/HbDjUQd"
        target="_blank"
        class="d-none d-sm-flex"
        depressed
        icon
      >
        <v-icon>mdi-microphone-message</v-icon>
      </v-btn>
      <v-btn
        href="https://steamcommunity.com/groups/willardnetworks"
        target="_blank"
        class="d-none d-sm-flex"
        depressed
        icon
      >
        <v-icon>mdi-steam</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-list nav>
        <v-list-item-group class="text-center">
          <v-img
            alt="HL2RP"
            class="my-4 mx-auto"
            width="68"
            src="https://willard.network/hl2rp_imgs/logo.svg"
          ></v-img>
          <v-divider></v-divider>
          <v-list-item
            @click="$vuetify.goTo('#newcomers', options)"
            class="mb-0"
            tile
          >
            <v-list-item-title class="rounded-0">New arrivals</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item
            @click="$vuetify.goTo('#gameplay', options)"
            class="mb-0"
            tile
          >
            <v-list-item-title class="rounded-0">HL2RP Gameplay</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item
            @click="$vuetify.goTo('#lore', options)"
            class="mb-0"
            tile
          >
            <v-list-item-title class="rounded-0">Lore</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item
            @click="$vuetify.goTo('#team', options)"
            class="mb-0"
            tile
          >
            <v-list-item-title class="rounded-0">The Team</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item
            @click="$vuetify.goTo('#faq', options)"
            class="mb-0"
            tile
          >
            <v-list-item-title class="rounded-0">FAQ</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <div class="d-flex justify-center mt-8">
            <v-btn
              href="https://willard.network/forums/"
              target="_blank"
              class="mx-1"
              depressed
              icon
            >
              <v-icon>mdi-forum</v-icon>
            </v-btn>
            <v-btn
              href="https://discord.gg/HbDjUQd"
              target="_blank"
              class="mx-1"
              depressed
              icon
            >
              <v-icon>mdi-microphone-message</v-icon>
            </v-btn>
            <v-btn
              href="https://steamcommunity.com/groups/willardnetworks"
              target="_blank"
              class="mx-1"
              depressed
              icon
            >
              <v-icon>mdi-steam</v-icon>
            </v-btn>
          </div>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-container
      fluid
      class="pa-0"
    >
      <Intro />
      <Newcomers />
      <Gameplay />
      <Lore />
      <Team />
      <Faq />
      <Join />
    </v-container>
  </v-card>
</template>

<script>
import * as easings from 'vuetify/es5/services/goto/easing-patterns'
import Intro from '@/views/Intro.vue'
import Newcomers from '@/views/Newcomers.vue'
import Gameplay from '@/views/Gameplay.vue'
import Lore from '@/views/Lore.vue'
import Team from '@/views/Team.vue'
import Faq from '@/views/Faq.vue'
import Join from '@/views/Join.vue'
export default {
  name: 'Home',
  data: () => ({
    drawer: false,
    duration: 400,
    offset: 0,
    easing: 'easeInOutCubic',
    easings: Object.keys(easings)
  }),
  components: {
    Intro,
    Newcomers,
    Gameplay,
    Lore,
    Team,
    Faq,
    Join
  },
  computed: {
    options () {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      }
    }
  }
}
</script>
<style lang="scss">
html,
body {
  background-color: #1c1c1c;
}
@media (max-width: 450px) {
  .navbar {
    background-color: rgba(0, 0, 0, 0.9) !important;
  }
}
.theme--dark.v-navigation-drawer {
  background-color: rgba(54, 54, 54, 0.5) !important;
  backdrop-filter: blur(4px) !important;
}
</style>
