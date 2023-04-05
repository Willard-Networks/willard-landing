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
        avatar: 'https://willard.network/hl2rp_imgs/avatars/atle.jpg',
        name: 'Atle',
        title: 'Willard Networks Director'
      },
      {
        avatar: 'https://willard.network/hl2rp_imgs/avatars/votton.jpg',
        name: 'Votton',
        title: 'Willard Networks Tech Manager'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://willard.network/hl2rp_imgs/avatars/legion.jpg',
        name: 'Legion',
        title: 'WN7 Manager (RU)'
      },
      {
        avatar: 'https://willard.network/hl2rp_imgs/avatars/pixel.gif',
        name: 'Pixel',
        title: 'WNO Manager (SPA)'
      },
      {
        avatar: 'https://willard.network/hl2rp_imgs/avatars/heat.png',
        name: 'Heat',
        title: 'OVC Manager (ROK)'
      },
      {
        avatar: 'https://willard.network/hl2rp_imgs/avatars/charly.png',
        name: 'Charly',
        title: 'WN: Echo One Manager (FR)'
      },
      {
        avatar: 'https://willard.network/hl2rp_imgs/avatars/abyss.png',
        name: 'Abyss',
        title: 'WN: Ordem17 (BR)'
      },
      {
        avatar: 'https://willard.network/hl2rp_imgs/avatars/loxy.png',
        name: 'Loxy',
        title: 'WN: Veles (PL)'
      },
      {
        avatar: 'https://willard.network/hl2rp_imgs/avatars/goose.png',
        name: 'Goose',
        title: 'WN: Mythos (EN HaloRP)'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://willard.network/hl2rp_imgs/avatars/rad.jpg',
        name: 'Lord-Rad-X',
        title: 'Server Director'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://willard.network/hl2rp_imgs/avatars/noodle.jpg',
        name: 'Noodle',
        title: 'Server Council Member'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://willard.network/hl2rp_imgs/avatars/mint.jpg',
        name: 'M!nt',
        title: 'Server Council Member'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://willard.network/hl2rp_imgs/avatars/rabithunter.png',
        name: 'Rabithunter',
        title: 'Server Council Member'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://willard.network/hl2rp_imgs/avatars/denuke.png',
        name: 'Denuke',
        title: 'Server Council Member'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://willard.network/hl2rp_imgs/avatars/neonity.png',
        name: 'Neonity',
        title: 'Staff Manager'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://willard.network/hl2rp_imgs/avatars/crab.png',
        name: 'Crab',
        title: 'Staff Manager'
      }
    ],
    devs: [
      {
        avatar: 'https://willard.network/hl2rp_imgs/avatars/aspect.jpg',
        name: 'Aspect',
        title: 'Developer'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://willard.network/hl2rp_imgs/avatars/gr4ss.jpg',
        name: 'Gr4Ss',
        title: 'Server Engineer'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://willard.network/hl2rp_imgs/avatars/fruity.jpg',
        name: 'Fruity',
        title: 'Lead UI Developer'
      },
      {
        avatar: 'https://willard.network/hl2rp_imgs/avatars/geferon.jpg',
        name: 'Geferon',
        title: 'Developer'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://willard.network/hl2rp_imgs/avatars/Miliviu.jpg',
        name: 'Miliviu',
        title: 'Developer'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://willard.network/hl2rp_imgs/avatars/whitehole.jpg',
        name: 'Whitehole',
        title: 'Developer'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://willard.network/hl2rp_imgs/avatars/naast.jpg',
        name: 'Naast Kyram',
        title: 'Developer'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://willard.network/hl2rp_imgs/avatars/mango.png',
        name: 'Mango',
        title: 'Developer'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://willard.network/hl2rp_imgs/avatars/kawa.jpg',
        name: 'kawasaniac',
        title: '3D Modeler'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://willard.network/hl2rp_imgs/avatars/wn.jpg',
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
    background-image: url("https://willard.network/hl2rp_imgs/cps.jpg");
    &:before {
      content: "";
      background-color: rgba(34, 32, 64, 0.85);
    }
  }
}
</style>
