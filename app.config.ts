let API_URL: string = import.meta.env.VITE_API_URL + '/api/v1/'

if (import.meta.env.MODE === 'development') {
  API_URL = `https://127.0.0.1:${import.meta.env.VITE_SERVER_PORT}/api/v1/`
}

export default {
  API_URL(uri?: string) {
    return uri ? API_URL + uri : API_URL
  },
  SITE_NAME: import.meta.env.VITE_SITENAME,
  TOKEN: import.meta.env.VITE_TOKEN,
}
