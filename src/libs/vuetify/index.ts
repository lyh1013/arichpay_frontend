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
          'primary-lighten-1': '#C5C2E4',
        },
        variables: {
          'tooltip-background': '#2F2B3D',
          'hover-opacity': 0.06,
          'focus-opacity': 0.1,
          'selected-opacity': 0.08,
          'disabled-opacity': 0.4,
          'border-color': '#2F2B3D',

          // Shadows
          'shadow-key-umbra-color': '#2F2B3D',
          'shadow-xs-opacity': 0.1,
          'shadow-sm-opacity': 0.12,
          'shadow-md-opacity': 0.14,
          'shadow-lg-opacity': 0.16,
          'shadow-xl-opacity': 0.18,
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
