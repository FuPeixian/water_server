module.exports = {
  publicPath:"/wepage/",
  outputDir:"../static",
  devServer: {
    port: 8080,
    proxy: {
      "/api": {
        target: "http://47.241.14.123/",
        ws: true,
        changOrigin: true, //允许跨域
        pathRewrite: {
          "^/api": "/"
        }
      }
    }
  }
}