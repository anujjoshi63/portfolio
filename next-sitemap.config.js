/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://anujjoshi.me",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    // Custom priority for different pages
    const priority =
      path === "/"
        ? 1.0
        : path.startsWith("/projects/")
          ? 0.9
          : path.startsWith("/blog/")
            ? 0.8
            : 0.7

    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: new Date().toISOString(),
    }
  },
}
