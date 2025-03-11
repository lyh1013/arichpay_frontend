const locale = cfg.DEFAULT_LOCALE

const vuetifyLocaleConfigs: Record<string, 'en' | 'zhHant'> = {
  en: 'en',
  'zh-TW': 'zhHant',
}

let { default: message } = await import(`../../locales/${locale}/core.ts`)

try {
  const { [vuetifyLocaleConfigs[locale]]: vuetifyMessage } = await import('vuetify/locale')

  message = { ...message, ...{ $vuetify: vuetifyMessage } }
} catch {
  console.warn(`Missing global language pack for ${message.locale} package`)
}

const messages = { [locale]: { ...message, ...{ views: {} } } }

export const VueI18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale,
  messages,
})

export const i18n = VueI18n.global
