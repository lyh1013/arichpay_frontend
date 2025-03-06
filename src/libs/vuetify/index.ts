// Styles
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { VNumberInput } from 'vuetify/labs/VNumberInput'

import '@mdi/font/css/materialdesignicons.css'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    ...components,
    VNumberInput,
  },
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#3E36A7',
        },
      },
    },
  },
  defaults: {
    global: {
      ripple: false,
    },
  },
  display: {
    mobileBreakpoint: 'sm',
  },
})
