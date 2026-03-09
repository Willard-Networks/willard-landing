<template>
  <v-card
    variant="flat"
    rounded="0"
    color="transparent"
    class="mx-auto"
  >
    <v-app-bar
      class="navbar"
      flat
      fixed
      height="50"
      color="rgba(0,0,0,0)"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>WILLARD NETWORKS</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
        @click="scrollTo('#newcomers')"
        class="d-none d-sm-flex"
        variant="text"
      >
        New arrivals
      </v-btn>
      <v-btn
        @click="scrollTo('#gameplay')"
        class="d-none d-sm-flex"
        variant="text"
      >
        HL2RP Gameplay
      </v-btn>
      <v-btn
        @click="scrollTo('#lore')"
        class="d-none d-sm-flex"
        variant="text"
      >
        Lore
      </v-btn>
      <v-divider vertical></v-divider>
      <v-btn
        href="https://willard.network/forums/"
        class="d-none d-sm-flex"
        variant="text"
      >
        Forums
      </v-btn>
      <v-btn
        @click="scrollTo('#faq')"
        class="d-none d-sm-flex"
        variant="text"
      >
        FAQ
      </v-btn>
      <v-divider vertical></v-divider>
      <v-btn
        href="https://discord.gg/HbDjUQd"
        target="_blank"
        class="d-none d-sm-flex"
        variant="text"
        icon
      >
        <v-icon>mdi-microphone-message</v-icon>
      </v-btn>
      <v-btn
        href="https://steamcommunity.com/groups/willardnetworks"
        target="_blank"
        class="d-none d-sm-flex"
        variant="text"
        icon
      >
        <v-icon>mdi-steam</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      temporary
    >
      <v-list nav>
        <div class="text-center">
          <v-img
            alt="HL2RP"
            class="my-4 mx-auto"
            width="68"
            src="https://willard.network/hl2rp_imgs/logo.svg"
          ></v-img>
          <v-divider></v-divider>
          <v-list-item
            @click="scrollTo('#newcomers')"
            class="mb-0"
            rounded="0"
          >
            <v-list-item-title>New arrivals</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item
            @click="scrollTo('#gameplay')"
            class="mb-0"
            rounded="0"
          >
            <v-list-item-title>HL2RP Gameplay</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item
            @click="scrollTo('#lore')"
            class="mb-0"
            rounded="0"
          >
            <v-list-item-title>Lore</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item
            @click="scrollTo('#faq')"
            class="mb-0"
            rounded="0"
          >
            <v-list-item-title>FAQ</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <div class="d-flex justify-center mt-8">
            <v-btn
              href="https://willard.network/forums/"
              target="_blank"
              class="mx-1"
              variant="text"
              icon
            >
              <v-icon>mdi-forum</v-icon>
            </v-btn>
            <v-btn
              href="https://discord.gg/HbDjUQd"
              target="_blank"
              class="mx-1"
              variant="text"
              icon
            >
              <v-icon>mdi-microphone-message</v-icon>
            </v-btn>
            <v-btn
              href="https://steamcommunity.com/groups/willardnetworks"
              target="_blank"
              class="mx-1"
              variant="text"
              icon
            >
              <v-icon>mdi-steam</v-icon>
            </v-btn>
          </div>
        </div>
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
      <Faq />
      <Join />
    </v-container>
  </v-card>
</template>

<script>
import Intro from '@/views/Intro.vue'
import Newcomers from '@/views/Newcomers.vue'
import Gameplay from '@/views/Gameplay.vue'
import Lore from '@/views/Lore.vue'
import Faq from '@/views/Faq.vue'
import Join from '@/views/Join.vue'
export default {
  name: 'Home',
  data: () => ({
    drawer: false
  }),
  components: {
    Intro,
    Newcomers,
    Gameplay,
    Lore,
    Faq,
    Join
  },
  methods: {
    scrollTo (selector) {
      const el = document.querySelector(selector)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
      this.drawer = false
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
.v-navigation-drawer {
  background-color: rgba(54, 54, 54, 0.5) !important;
  backdrop-filter: blur(4px) !important;
}
</style>
