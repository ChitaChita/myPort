module.exports = {
  outputDir: 'docs',
  assetsDir: './',
  publicPath: './',
  devServer: {
      watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 1000,
      },
  },
  "transpileDependencies": [
    "vuetify"
  ]
}