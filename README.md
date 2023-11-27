# rspack-vue

2023-11-30 使用 vue-cli 创建的 vue2.6 项目，接入 rspack 的 demo。

webpack.dev.js 中的绝大部分配置都平移过来了。

项目搭建：

```shell
$ npm install -g @vue/cli@5.0.8
$ vue create rspack-vue
```

webpack.dev.js 和 webpack.prod.js 是 vue-cli 内置的 webpack 配置，通过如下命令导出：

```shell
$ vue inspect --mode development > webpack.dev.js
$ vue inspect --mode production > webpack.prod.js
```

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
