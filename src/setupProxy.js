const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = (app) => {
  app.use(
    ["/users", "/auth", "/feedbacks"],
    createProxyMiddleware({
      target: "https://healthybee.herokuapp.com",
      changeOrigin: true,
      secure: false,
    })
  );
};
