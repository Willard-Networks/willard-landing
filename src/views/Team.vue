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
      { divider: true, inset: true },
      {
        avatar: 'https://willard.network/hl2rp_imgs/avatars/rad.jpg',
        name: 'Lord-Rad-X',
        title: 'Community Manager'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://willard.network/hl2rp_imgs/avatars/votton.jpg',
        name: 'Votton',
        title: 'Community Manager'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://willard.network/hl2rp_imgs/avatars/noodle.jpg',
        name: 'Noodle',
        title: 'Community Manager'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://willard.network/hl2rp_imgs/avatars/maroon.jpg',
        name: 'Maroon',
        title: 'Head of Staff'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://willard.network/hl2rp_imgs/avatars/hades.jpg',
        name: 'Hades',
        title: 'Head of Staff Assistant'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://willard.network/hl2rp_imgs/avatars/nixeighteen.jpg',
        name: 'Nixeighteen',
        title: 'Head of Staff Assistant'
      }
    ],
    devs: [
      {
        avatar: 'https://willard.network/hl2rp_imgs/avatars/aspect.jpg',
        name: 'Aspect',
        title: 'Lead Developer'
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
        avatar: 'https://willard.network/hl2rp_imgs/avatars/mint.jpg',
        name: 'Mint',
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
