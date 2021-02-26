module.exports = {
  siteMetadata: {
    title: 'Makzan Notes',
    description: `Notes`,
    author: 'Makzan',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-code-notes',
      options: {
        contentPath: 'notes',
        basePath: '/',
        showThemeInfo: false,
        showDescriptionInSidebar: true,
        showDate: true,
      },
    },
  ],
}
