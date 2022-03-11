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
        components: "@/components",
        pages: "@/pages",
        subPackages: "@/subPackages",
        utils: "@/utils",
      },
    },
  },
  transpileDependencies: ["uview-ui"],
}
