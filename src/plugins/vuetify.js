import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          background: '#1c1c1c',
          surface: '#1c1c1c',
          primary: '#FF4E45',
          secondary: '#D1D1D1',
          grey: '#787878',
          darkgrey: '#292929'
        }
      }
    }
  }
})
