<template>
  <v-row
    id="faq"
    class="wrapper overflow-hidden text-center"
    align="center"
    justify="center"
  >
    <v-col
      cols="12"
      md="6"
    >
      <v-card
        class="content transparent"
        flat
      >
        <h1>FAQ</h1>
        <h2 class="mb-8">Frequently asked questions</h2>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header class="py-md-5">
              <h3>What makes Willard Networks different from other communities?</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="text-left secondary--text">
              We are a community of people from many different backgrounds, past servers and so on which strive to make HL2:RP a much better place then it currently is. We aim to give players more freedom, allowing them to decide their fate, storyline, have some effect on the world and have the world react to their actions. We do not want players to feel bogged down by rules and feel restricted. No more invisible walls or props/text telling you that you can't go somewhere. The players are now the ones writing the story, not the Staff. You create, you decide, you enjoy yourself.
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header class="py-md-5">
              <h3>What will the citizen faction be like? I see the other factions have lots to do, what about me as a standard citizen?</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="text-left secondary--text">
              The citizen faction is still something we are majorly working on behind the scenes, trying to sort out some of the main issues that have been spotted or created over the years since HL2:RP first started. However, we can tell you now that we are doing our very best to make sure the citizen faction is very much involved in all aspects of the City and its functionality, meaning their RP will be increased. We will also be making sure that citizens can have fun and gain the chance to play games with other citizens, chat with other factions and interact other than Resistance/Refugees and much much more!
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header class="py-md-5">
              <h3>Where can I find the server's IP/content?</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="text-left secondary--text">
              Look to the right sidebar in the forums for our gametracker info or simply add this IP-Address to your favorites in the server browser: 178.239.172.10:27015. For the content, look to our information subforum in our forums to find our workshop collection.
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header class="py-md-5">
              <h3>I am missing content and/or see black and purple textures even though I have the content, what do I do?</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="text-left secondary--text">
              Make sure you install the optional CS:GO content linked via our workshop collection.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
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
#faq {
  .parallax {
    background-image: url("~@/assets/hl2rp_imgs/cityadmin.jpg");
    &:before {
      content: "";
      background-color: rgba(34, 32, 64, 0.6);
    }
  }
}
</style>
