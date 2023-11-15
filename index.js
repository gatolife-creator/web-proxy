const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  "/",
  createProxyMiddleware({
    target: "https://www.youtube.com",
    changeOrigin: true,
    ws: true,
  })
);
app.listen(3000);
