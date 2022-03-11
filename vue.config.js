module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
    },
  },
  lintOnSave: false, //关闭语法检查
  configureWebpack: {
    resolve: {
      // 路径别名
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
