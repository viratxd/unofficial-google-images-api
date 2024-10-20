const config: Record<string, any> = {
  app: {
    port: process.env.PORT
  },
  google: {
    url: process.env.GOOGLE_IMAGES_BASE_URI,
    user_agent: process.env.GOOGLE_IMAGES_SEARCH_USER_AGENT,
  },
  db: {
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    uri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=main-cluster`
  }
}

export default config;