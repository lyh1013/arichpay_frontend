// Styles
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'

import { VNumberInput } from 'vuetify/labs/VNumberInput'
import { VFileUpload } from 'vuetify/labs/VFileUpload'
import { VDateInput } from 'vuetify/labs/VDateInput'

import '@mdi/font/css/materialdesignicons.css'

import { VueI18n } from '../i18n'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    ...components,
    VNumberInput,
    VFileUpload,
    VDateInput,
  },
  directives,
  // locale: {
  //   adapter: createVueI18nAdapter({ i18n: VueI18n, useI18n }),
  // },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#3E36A7',
          'primary-darken': '#312B85',
          'primary-darken-1': '#807da3',
          'primary-lighten-1': '#C5C2E4',
          success: '#00BFA5',
          info: '#00BAD1',
          warning: '#FF8F00',
          'error-lighten': '#FF5252',
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
    VCard: {
      rounded: 'xl',
    },
    VBtn: {
      color: 'primary',
      rounded: 'xl',
    },
    VTextField: {
      variant: 'outlined',
      density: 'comfortable',
      color: 'primary',
      hideDetails: 'auto',
    },
    VFileInput: {
      variant: 'outlined',
      density: 'compact',
      color: 'primary',
      hideDetails: 'auto',
    },
    VDateInput: {
      variant: 'outlined',
      density: 'compact',
      color: 'primary',
      hideDetails: 'auto',
    },
    VAlert: {
      density: 'comfortable',
      variant: 'tonal',
      VBtn: {
        color: undefined,
      },
    },
  },
  display: {
    mobileBreakpoint: 'sm',
    thresholds: {
      xs: 400,
      sm: 560,
      md: 960,
      lg: 1280,
      xl: 1920,
      xxl: 2560,
    },
  },
})
