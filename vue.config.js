module.exports = {
    devServer: {
      port: 8080, // 端口号
      host:"0.0.0.0",
      https: false, // https:{type:Boolean}
      open: false, //配置自动启动浏览器
      // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
      proxy: {
        "/api": {
        target: "http://192.168.0.101",
          ws: true,
          changeOrigin: true
        },
        "/foo": {
          target: "<other_url>"
        }
      } // 配置多个代理
    }
  };