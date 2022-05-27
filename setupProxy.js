const proxy = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    proxy.createProxyMiddleware({
      target: "http://localhost:8081",
      changeOrigin: true,
      pathRewrite: {},
    })
  );
};
