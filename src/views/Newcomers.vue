<template>
  <v-row
    id="newcomers"
    class="wrapper overflow-hidden"
    align="center"
  >
    <v-col
      class="pl-8 pl-md-3"
      cols="12"
      md="5"
      lg="3"
      offset-md="1"
      offset-lg="2"
    >
      <v-card
        max-width="360"
        class="content mx-auto transparent"
        flat
      >
        <h1>New arrivals.</h1>
        <h2 class="font-italic">Welcome to city <span class="primary white--text">{{ timerCount }}</span></h2>
        <p>The world is under occupation by an alien force dubbed the Combine. You have arrived in your new city and must find a way to survive this new world.</p>
        <p>Will you choose to follow the system? Or will you choose to carefully go against the grain? Join mankinds fight against oppression and extinction or you can join the greater collective.</p>
        <p>You are the storyteller, which story will you tell?</p>
        <v-btn
          href="https://discord.gg/HbDjUQd"
          target="_blank"
          class="mt-4 mr-3"
          outlined
        >
          <v-icon
            class="mr-2"
            small
          >mdi-discord</v-icon>Discord
        </v-btn>
        <v-btn
          href="https://willard.network/forums/"
          class="mt-4"
          outlined
        >
          <v-icon
            class="mr-2"
            small
          >mdi-forum</v-icon>Forums
        </v-btn>
        <a
          href="https://www.deviantart.com/xieangel/art/City-17-Streets-836653258"
          target="_blank"
          class="font-italic text-decoration-none d-block mt-3"
          style="color: #FFCC00;"
        >Background artwork by XieAngel</a>
      </v-card>
    </v-col>
    <div class="parallax"></div>
  </v-row>
</template>
<script>

export default {

  data () {
    return {
      timerCount: 5
    }
  },

  watch: {
    timerCount: {
      handler () {
        setTimeout(() => {
          var random = Math.random() * (50 - 1) + 1
          this.timerCount = Math.floor(random)
        }, 2000)
      },
      immediate: true // This ensures the watcher is triggered upon creation
    }

  }
}

</script>
<style lang="scss">
#newcomers {
  .parallax {
    background-image: url("https://willard.network/hl2rp_imgs/city.jpg");
    &:before {
      content: "";
      background-color: rgba(34, 32, 64, 0.7);
    }
  }
}
</style>
