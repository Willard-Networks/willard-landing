<template>
  <v-row
    id="team"
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
        class="content transparent"
        flat
      >
        <h1>The Team.</h1>
        <h2 class="font-italic">Making it happen!</h2>
        <div class="d-block d-md-flex">
          <v-list
            color="rgba(0,0,0,0.4)"
            class="mr-md-12"
          >
            <template v-for="(item, index) in management">
              <v-subheader
                v-if="item.header"
                :key="item.header"
                {{ item.header }}
              ></v-subheader>

              <v-divider
                v-else-if="item.divider"
                :key="index"
                :inset="item.inset"
              ></v-divider>

              <v-list-item
                v-else
                :key="item.name"
              >
                <v-list-item-avatar>
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title class="d-flex align-center justify-space-between">{{item.name}}
                    <v-chip
                      class="ml-8"
                      outlined
                      x-small
                    >{{item.title}}</v-chip>
                  </v-list-item-title>

                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
          <v-list color="rgba(0,0,0,0.4)">
            <template v-for="(item, index) in devs">
              <v-subheader
                v-if="item.header"
                :key="item.header"
                {{ item.header }}
              ></v-subheader>

              <v-divider
                v-else-if="item.divider"
                :key="index"
                :inset="item.inset"
              ></v-divider>

              <v-list-item
                v-else
                :key="item.name"
              >
                <v-list-item-avatar>
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title class="d-flex align-center justify-space-between">{{item.name}}
                    <v-chip
                      class="ml-8"
                      outlined
                      x-small
                    >{{item.title}}</v-chip>
                  </v-list-item-title>

                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </div>
      </v-card>
    </v-col>
    <div class="parallax"></div>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    management: [
      {
        avatar: 'avatars/atle.jpg',
        name: 'Atle',
        title: 'Willard Networks Director'
      },
      {
        avatar: 'avatars/votton.jpg',
        name: 'Votton',
        title: 'Willard Networks Tech Manager'
      },
      { divider: true, inset: true },
      {
        avatar: 'avatars/legion.jpg',
        name: 'Legion',
        title: 'WN7 Manager (RU)'
      },
      {
        avatar: 'avatars/pixel.gif',
        name: 'Pixel',
        title: 'WNO Manager (SPA)'
      },
      {
        avatar: 'avatars/heat.png',
        name: 'Heat',
        title: 'OVC Manager (ROK)'
      },
      {
        avatar: 'avatars/charly.png',
        name: 'Charly',
        title: 'WN: Echo One Manager (FR)'
      },
      {
        avatar: 'avatars/abyss.png',
        name: 'Abyss',
        title: 'WN: Ordem17 (BR)'
      },
      {
        avatar: 'avatars/loxy.png',
        name: 'Loxy',
        title: 'WN: Veles (PL)'
      },
      {
        avatar: 'avatars/hayden.png',
        name: 'Hayden',
        title: 'WN: Short Stories (EN)'
      },
      {
        avatar: 'avatars/goose.png',
        name: 'Goose',
        title: 'WN: Mythos (EN HaloRP)'
      },
      { divider: true, inset: true },
      {
        avatar: 'avatars/rad.jpg',
        name: 'Lord-Rad-X',
        title: 'Server Director'
      },
      { divider: true, inset: true },
      {
        avatar: 'avatars/noodle.jpg',
        name: 'Noodle',
        title: 'Server Council Member'
      },
      { divider: true, inset: true },
      {
        avatar: 'avatars/mint.jpg',
        name: 'M!nt',
        title: 'Server Council Member'
      },
      { divider: true, inset: true },
      {
        avatar: 'avatars/rabithunter.png',
        name: 'Rabithunter',
        title: 'Server Council Member'
      },
      { divider: true, inset: true },
      {
        avatar: 'avatars/denuke.png',
        name: 'Denuke',
        title: 'Server Council Member'
      },
      { divider: true, inset: true },
      {
        avatar: 'avatars/neonity.png',
        name: 'Neonity',
        title: 'Staff Manager'
      },
      { divider: true, inset: true },
      {
        avatar: 'avatars/crab.png',
        name: 'Crab',
        title: 'Staff Manager'
      }
    ],
    devs: [
      {
        avatar: 'avatars/aspect.jpg',
        name: 'Aspect',
        title: 'Developer'
      },
      { divider: true, inset: true },
      {
        avatar: 'avatars/gr4ss.jpg',
        name: 'Gr4Ss',
        title: 'Server Engineer'
      },
      { divider: true, inset: true },
      {
        avatar: 'avatars/fruity.jpg',
        name: 'Fruity',
        title: 'Lead UI Developer'
      },
      {
        avatar: 'avatars/geferon.jpg',
        name: 'Geferon',
        title: 'Developer'
      },
      { divider: true, inset: true },
      {
        avatar: 'avatars/Miliviu.jpg',
        name: 'Miliviu',
        title: 'Developer'
      },
      { divider: true, inset: true },
      {
        avatar: 'avatars/whitehole.jpg',
        name: 'Whitehole',
        title: 'Developer'
      },
      { divider: true, inset: true },
      {
        avatar: 'avatars/naast.jpg',
        name: 'Naast Kyram',
        title: 'Developer'
      },
      { divider: true, inset: true },
      {
        avatar: 'avatars/mango.png',
        name: 'Mango',
        title: 'Developer'
      },
      { divider: true, inset: true },
      {
        avatar: 'avatars/kawa.jpg',
        name: 'kawasaniac',
        title: '3D Modeler'
      },
      { divider: true, inset: true },
      {
        avatar: 'avatars/wn.jpg',
        name: 'The Community',
        title: 'Players, Admins and all Contributors alike'
      },
      { divider: true, inset: true }
    ]
  })
}
</script>
<style lang="scss">
#team {
  .parallax {
    background-image: url("~@/assets/hl2rp_imgs/cps.jpg");
    &:before {
      content: "";
      background-color: rgba(34, 32, 64, 0.85);
    }
  }
}
</style>
