<template>
  <v-row
    id="join"
    class="wrapper overflow-hidden text-center"
    align="center"
  >
    <v-col cols="12">
      <v-card
        class="content transparent"
        flat
      >
        <h1>Join Willards</h1>
        <h2>Your HL2RP adventure awaits!</h2>
        <v-btn
          href="https://discord.gg/HbDjUQd"
          target="_blank"
          class="mt-6 py-6 mx-2"
          width="220"
          color="primary"
        >
          <v-icon class="mr-2">mdi-microphone-message</v-icon>Discord
        </v-btn>
        <v-btn
          href="https://willard.network/forums/"
          class="mt-6 py-6 mx-2"
          width="220"
          color="primary"
        >
          <v-icon class="mr-2">mdi-forum</v-icon>Forums
        </v-btn>
      </v-card>
    </v-col>
    <div class="parallax"></div>
  </v-row>
</template>
<script>
export default {

}
</script>
<style lang="scss">
#join {
  .parallax {
    background-image: url("https://willard.network/hl2rp_imgs/citadel.jpg");
    &:before {
      content: "";
      background-color: rgba(34, 32, 64, 0.6);
    }
  }
}
</style>
