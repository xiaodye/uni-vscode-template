## **简述一下**这个模板给VSCode开发` uni-app`带来的体验

采用`vue3` + `vite` + `ts`,并安装有`@dcloudio/types`、 `@types/wechat-miniprogram`、`uni-app-types`、`uni-cloud-types`等包，api等类型提示完善，开发体验非常好。

- 增强`pages.json`和`manifest.json`开发体验（语法提示、颜色块、写注释）
- 一键创建页面、组件、分包
- 完善的`API`，组件，uni.scss语法提示
- 条件编译注释高亮

## 推荐安装的VSCode插件

- uni-app-schemas
- uni-create-view
- uni-app-snippets
- Path Intellisense
- SCSS IntelliSense
- Better Comments（目前在`volar`下无效）




> **详细的教程请看**：[这可能是最好、最详细的VSCod开发uni-app教程吧](https://juejin.cn/post/7090532271257714695)。

## 项目配置

![image-20220429134331265](https://s2.loli.net/2022/04/29/foQDHulNeEwhcAi.png)

## 运行项目

对应的命令在`package.json`，中，可以自行查看。

```bash
npm run dev: %PLATFORM%
```

## 发布项目

```bash
npm run build: %PLATFORM%
```

