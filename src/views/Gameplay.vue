<template>
  <v-row
    id="gameplay"
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
        <h1>HL2RP Gameplay.</h1>
        <h2 class="font-italic">Built for roleplay</h2>
        <p>Discover the fresh Half-Life 2 Roleplay (HL2RP) server, featuring an overhauled combat system, gameplay and UI, forming a unique experience. Taking inspiration from games such as Divinity Original Sin and Xcom 2, we've created a new HL2RPG genre.</p>
        <p>Our unique skill system offers a brand-new look on player progression unlike anything seen before. Freedom is key, and we allow you to play the character you truly want to be. Indulge in our unique lore, fun features and interesting mechanics and bring your character to life in our HL2RP!</p>
        <v-btn
          href="https://willard.network/forums/wn/development-updates.60/"
          class="mt-4"
          outlined
        >
          <v-icon
            class="mr-2"
            small
          >mdi-hammer-wrench</v-icon>Dev diaries
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
#gameplay {
  .parallax {
    background-image: url("~@/assets/hl2rp_imgs/speed.jpg");
    &:before {
      content: "";
      background-color: rgba(34, 32, 64, 0.7);
    }
  }
}
</style>
