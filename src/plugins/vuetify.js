import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      dark: {
        primary: '#FF4E45',
        secondary: '#D1D1D1',
        grey: '#787878',
        darkgrey: '#292929'
      }
    },
    dark: true
  }
})
