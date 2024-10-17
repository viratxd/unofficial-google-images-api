const config: Record<string, any> = {
  app: {
    port: process.env.APP_PORT
  },
  google: {
    url: process.env.GOOGLE_IMAGES_BASE_URI,
    user_agent: process.env.GOOGLE_IMAGES_SEARCH_USER_AGENT,
  }
}

export default config;