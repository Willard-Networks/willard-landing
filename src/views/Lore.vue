<template>
  <v-row
    id="lore"
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
        max-width="380"
        class="content mx-auto transparent"
        flat
      >
        <h1>Lore.</h1>
        <h2 class="font-italic">Unique community written HL2RP lore</h2>
        <p>In the year 2001, the Resonance Cascade occurred, merging Xen and Earth in a terrible extradimensional catastrophe that killed hundreds of millions as humanity fell apart. Years passed, and as humanity slowly withered under the threat of Xen, the Combine invaded Earth, establishing their cold, heartless dominance.</p>
        <p>Billions were contained in cities across the globe, as the Combine’s regime was made reality. A totalitarian nightmare, both humans and vortigaunts toil away in factories, living the life that the Combine dictate.</p>
        <p>It has been a decade since the Combine arrived. At the height of their rule, the Combine’s will is above all. Even in the face of such power, the flame of resistance burns in the hearts of humans and vortigaunts. The future will be molded by the brave and ambitious, whether it be freedom, subjugation, or extinction.</p>
        <v-btn
          href="https://willard.network/forums/threads/updated-willard-networks-lorefront-past-to-present.274/"
          class="mt-4"
          outlined
        >
          <v-icon
            class="mr-2"
            small
          >mdi-script-text</v-icon>Read more
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
#lore {
  .parallax {
    background-image: url("~@/assets/hl2rp_imgs/globe.jpg");
    &:before {
      content: "";
      background-color: rgba(34, 32, 64, 0.7);
    }
  }
}
</style>
