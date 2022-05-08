module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
    },
  },
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        static: "@/static",
      },
    },
  },
  transpileDependencies: ["uview-ui"],
}
