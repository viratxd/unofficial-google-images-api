const config: Record<string, any> = {
  app: {
    port: process.env.PORT || 3000,
  },
  google: {
    url: process.env.GOOGLE_IMAGES_BASE_URI || 'https://www.google.com/search',
    user_agent: process.env.GOOGLE_IMAGES_SEARCH_USER_AGENT || 'Mozilla/5.0',
  },
};

export default config;
