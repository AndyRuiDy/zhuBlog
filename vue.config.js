module.exports = {
  productionSourceMap: false,
  configureWebpack: {},
  devServer: {
    port: 9090,
    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: {
      '/blogger': {
        target: 'http://localhost:8089/blogger-boot/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '/blogger': ''
        }
      }
    }
  },
  lintOnSave: undefined
}
