const config = {
  mode: "production",
  context: "/Users/yan/git/rspack-vue",
  devtool: "source-map",
  output: {
    hashFunction: "xxhash64",
    path: "/Users/yan/git/rspack-vue/dist",
    filename: "js/[name].[contenthash:8].js",
    publicPath: "/",
    chunkFilename: "js/[name].[contenthash:8].js",
  },
  resolve: {
    alias: {
      "@": "/Users/yan/git/rspack-vue/src",
      vue$: "vue/dist/vue.runtime.esm.js",
    },
    extensions: [
      ".tsx",
      ".ts",
      ".mjs",
      ".js",
      ".jsx",
      ".vue",
      ".json",
      ".wasm",
    ],
    modules: [
      "node_modules",
      "/Users/yan/git/rspack-vue/node_modules",
      "/Users/yan/git/rspack-vue/node_modules/@vue/cli-service/node_modules",
    ],
  },
  resolveLoader: {
    modules: [
      "/Users/yan/git/rspack-vue/node_modules/@vue/cli-plugin-typescript/node_modules",
      "/Users/yan/git/rspack-vue/node_modules/@vue/cli-plugin-babel/node_modules",
      "/Users/yan/git/rspack-vue/node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat",
      "node_modules",
      "/Users/yan/git/rspack-vue/node_modules",
      "/Users/yan/git/rspack-vue/node_modules/@vue/cli-service/node_modules",
    ],
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('esm') */
      {
        test: /\.m?jsx?$/,
        resolve: {
          fullySpecified: false,
        },
      },
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          /* config.module.rule('vue').use('vue-loader') */
          {
            loader:
              "/Users/yan/git/rspack-vue/node_modules/@vue/vue-loader-v15/lib/index.js",
            options: {
              compilerOptions: {
                whitespace: "condense",
              },
            },
          },
        ],
      },
      /* config.module.rule('vue-style') */
      {
        test: /\.vue$/,
        resourceQuery: /type=style/,
        sideEffects: true,
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').oneOf('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              /* config.module.rule('pug').oneOf('pug-vue').use('pug-plain-loader') */
              {
                loader: "pug-plain-loader",
              },
            ],
          },
          /* config.module.rule('pug').oneOf('pug-template') */
          {
            use: [
              /* config.module.rule('pug').oneOf('pug-template').use('raw') */
              {
                loader: "raw-loader",
              },
              /* config.module.rule('pug').oneOf('pug-template').use('pug-plain-loader') */
              {
                loader: "pug-plain-loader",
              },
            ],
          },
        ],
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        type: "asset/resource",
        generator: {
          filename: "img/[name].[hash:8][ext]",
        },
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp|avif)(\?.*)?$/,
        type: "asset",
        generator: {
          filename: "img/[name].[hash:8][ext]",
        },
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: "asset",
        generator: {
          filename: "media/[name].[hash:8][ext]",
        },
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: "asset",
        generator: {
          filename: "fonts/[name].[hash:8][ext]",
        },
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('css').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/mini-css-extract-plugin/dist/loader.js",
                options: {
                  publicPath: "/",
                },
              },
              /* config.module.rule('css').oneOf('vue-modules').use('css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: "[name]_[local]_[hash:base64:5]",
                    auto: () => true,
                  },
                },
              },
              /* config.module.rule('css').oneOf('vue-modules').use('postcss-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/postcss-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () {
                        /* omitted long function */
                      },
                    ],
                  },
                },
              },
            ],
          },
          /* config.module.rule('css').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('css').oneOf('vue').use('extract-css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/mini-css-extract-plugin/dist/loader.js",
                options: {
                  publicPath: "/",
                },
              },
              /* config.module.rule('css').oneOf('vue').use('css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('css').oneOf('vue').use('postcss-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/postcss-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () {
                        /* omitted long function */
                      },
                    ],
                  },
                },
              },
            ],
          },
          /* config.module.rule('css').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('css').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/mini-css-extract-plugin/dist/loader.js",
                options: {
                  publicPath: "/",
                },
              },
              /* config.module.rule('css').oneOf('normal-modules').use('css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('css').oneOf('normal-modules').use('postcss-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/postcss-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () {
                        /* omitted long function */
                      },
                    ],
                  },
                },
              },
            ],
          },
          /* config.module.rule('css').oneOf('normal') */
          {
            use: [
              /* config.module.rule('css').oneOf('normal').use('extract-css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/mini-css-extract-plugin/dist/loader.js",
                options: {
                  publicPath: "/",
                },
              },
              /* config.module.rule('css').oneOf('normal').use('css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('css').oneOf('normal').use('postcss-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/postcss-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () {
                        /* omitted long function */
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('postcss').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/mini-css-extract-plugin/dist/loader.js",
                options: {
                  publicPath: "/",
                },
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: "[name]_[local]_[hash:base64:5]",
                    auto: () => true,
                  },
                },
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/postcss-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () {
                        /* omitted long function */
                      },
                    ],
                  },
                },
              },
            ],
          },
          /* config.module.rule('postcss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('postcss').oneOf('vue').use('extract-css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/mini-css-extract-plugin/dist/loader.js",
                options: {
                  publicPath: "/",
                },
              },
              /* config.module.rule('postcss').oneOf('vue').use('css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('postcss').oneOf('vue').use('postcss-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/postcss-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () {
                        /* omitted long function */
                      },
                    ],
                  },
                },
              },
            ],
          },
          /* config.module.rule('postcss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('postcss').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/mini-css-extract-plugin/dist/loader.js",
                options: {
                  publicPath: "/",
                },
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/postcss-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () {
                        /* omitted long function */
                      },
                    ],
                  },
                },
              },
            ],
          },
          /* config.module.rule('postcss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('postcss').oneOf('normal').use('extract-css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/mini-css-extract-plugin/dist/loader.js",
                options: {
                  publicPath: "/",
                },
              },
              /* config.module.rule('postcss').oneOf('normal').use('css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('postcss').oneOf('normal').use('postcss-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/postcss-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () {
                        /* omitted long function */
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('scss').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/mini-css-extract-plugin/dist/loader.js",
                options: {
                  publicPath: "/",
                },
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: "[name]_[local]_[hash:base64:5]",
                    auto: () => true,
                  },
                },
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/postcss-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () {
                        /* omitted long function */
                      },
                    ],
                  },
                },
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('sass-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/sass-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          /* config.module.rule('scss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('scss').oneOf('vue').use('extract-css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/mini-css-extract-plugin/dist/loader.js",
                options: {
                  publicPath: "/",
                },
              },
              /* config.module.rule('scss').oneOf('vue').use('css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('scss').oneOf('vue').use('postcss-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/postcss-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () {
                        /* omitted long function */
                      },
                    ],
                  },
                },
              },
              /* config.module.rule('scss').oneOf('vue').use('sass-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/sass-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          /* config.module.rule('scss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('scss').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/mini-css-extract-plugin/dist/loader.js",
                options: {
                  publicPath: "/",
                },
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/postcss-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () {
                        /* omitted long function */
                      },
                    ],
                  },
                },
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('sass-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/sass-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          /* config.module.rule('scss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('scss').oneOf('normal').use('extract-css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/mini-css-extract-plugin/dist/loader.js",
                options: {
                  publicPath: "/",
                },
              },
              /* config.module.rule('scss').oneOf('normal').use('css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('scss').oneOf('normal').use('postcss-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/postcss-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () {
                        /* omitted long function */
                      },
                    ],
                  },
                },
              },
              /* config.module.rule('scss').oneOf('normal').use('sass-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/sass-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
        ],
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('sass').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/mini-css-extract-plugin/dist/loader.js",
                options: {
                  publicPath: "/",
                },
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: "[name]_[local]_[hash:base64:5]",
                    auto: () => true,
                  },
                },
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('postcss-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/postcss-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () {
                        /* omitted long function */
                      },
                    ],
                  },
                },
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('sass-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/sass-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true,
                  },
                },
              },
            ],
          },
          /* config.module.rule('sass').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('sass').oneOf('vue').use('extract-css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/mini-css-extract-plugin/dist/loader.js",
                options: {
                  publicPath: "/",
                },
              },
              /* config.module.rule('sass').oneOf('vue').use('css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('sass').oneOf('vue').use('postcss-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/postcss-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () {
                        /* omitted long function */
                      },
                    ],
                  },
                },
              },
              /* config.module.rule('sass').oneOf('vue').use('sass-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/sass-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true,
                  },
                },
              },
            ],
          },
          /* config.module.rule('sass').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('sass').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/mini-css-extract-plugin/dist/loader.js",
                options: {
                  publicPath: "/",
                },
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('postcss-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/postcss-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () {
                        /* omitted long function */
                      },
                    ],
                  },
                },
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('sass-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/sass-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true,
                  },
                },
              },
            ],
          },
          /* config.module.rule('sass').oneOf('normal') */
          {
            use: [
              /* config.module.rule('sass').oneOf('normal').use('extract-css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/mini-css-extract-plugin/dist/loader.js",
                options: {
                  publicPath: "/",
                },
              },
              /* config.module.rule('sass').oneOf('normal').use('css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('sass').oneOf('normal').use('postcss-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/postcss-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () {
                        /* omitted long function */
                      },
                    ],
                  },
                },
              },
              /* config.module.rule('sass').oneOf('normal').use('sass-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/sass-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true,
                  },
                },
              },
            ],
          },
        ],
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('less').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/mini-css-extract-plugin/dist/loader.js",
                options: {
                  publicPath: "/",
                },
              },
              /* config.module.rule('less').oneOf('vue-modules').use('css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: "[name]_[local]_[hash:base64:5]",
                    auto: () => true,
                  },
                },
              },
              /* config.module.rule('less').oneOf('vue-modules').use('postcss-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/postcss-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () {
                        /* omitted long function */
                      },
                    ],
                  },
                },
              },
              /* config.module.rule('less').oneOf('vue-modules').use('less-loader') */
              {
                loader: "less-loader",
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          /* config.module.rule('less').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('less').oneOf('vue').use('extract-css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/mini-css-extract-plugin/dist/loader.js",
                options: {
                  publicPath: "/",
                },
              },
              /* config.module.rule('less').oneOf('vue').use('css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('less').oneOf('vue').use('postcss-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/postcss-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () {
                        /* omitted long function */
                      },
                    ],
                  },
                },
              },
              /* config.module.rule('less').oneOf('vue').use('less-loader') */
              {
                loader: "less-loader",
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          /* config.module.rule('less').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('less').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/mini-css-extract-plugin/dist/loader.js",
                options: {
                  publicPath: "/",
                },
              },
              /* config.module.rule('less').oneOf('normal-modules').use('css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('less').oneOf('normal-modules').use('postcss-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/postcss-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () {
                        /* omitted long function */
                      },
                    ],
                  },
                },
              },
              /* config.module.rule('less').oneOf('normal-modules').use('less-loader') */
              {
                loader: "less-loader",
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          /* config.module.rule('less').oneOf('normal') */
          {
            use: [
              /* config.module.rule('less').oneOf('normal').use('extract-css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/mini-css-extract-plugin/dist/loader.js",
                options: {
                  publicPath: "/",
                },
              },
              /* config.module.rule('less').oneOf('normal').use('css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('less').oneOf('normal').use('postcss-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/postcss-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () {
                        /* omitted long function */
                      },
                    ],
                  },
                },
              },
              /* config.module.rule('less').oneOf('normal').use('less-loader') */
              {
                loader: "less-loader",
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
        ],
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('stylus').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/mini-css-extract-plugin/dist/loader.js",
                options: {
                  publicPath: "/",
                },
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: "[name]_[local]_[hash:base64:5]",
                    auto: () => true,
                  },
                },
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('postcss-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/postcss-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () {
                        /* omitted long function */
                      },
                    ],
                  },
                },
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('stylus-loader') */
              {
                loader: "stylus-loader",
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          /* config.module.rule('stylus').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('stylus').oneOf('vue').use('extract-css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/mini-css-extract-plugin/dist/loader.js",
                options: {
                  publicPath: "/",
                },
              },
              /* config.module.rule('stylus').oneOf('vue').use('css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('stylus').oneOf('vue').use('postcss-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/postcss-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () {
                        /* omitted long function */
                      },
                    ],
                  },
                },
              },
              /* config.module.rule('stylus').oneOf('vue').use('stylus-loader') */
              {
                loader: "stylus-loader",
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          /* config.module.rule('stylus').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('stylus').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/mini-css-extract-plugin/dist/loader.js",
                options: {
                  publicPath: "/",
                },
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('postcss-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/postcss-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () {
                        /* omitted long function */
                      },
                    ],
                  },
                },
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('stylus-loader') */
              {
                loader: "stylus-loader",
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          /* config.module.rule('stylus').oneOf('normal') */
          {
            use: [
              /* config.module.rule('stylus').oneOf('normal').use('extract-css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/mini-css-extract-plugin/dist/loader.js",
                options: {
                  publicPath: "/",
                },
              },
              /* config.module.rule('stylus').oneOf('normal').use('css-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('stylus').oneOf('normal').use('postcss-loader') */
              {
                loader:
                  "/Users/yan/git/rspack-vue/node_modules/postcss-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () {
                        /* omitted long function */
                      },
                    ],
                  },
                },
              },
              /* config.module.rule('stylus').oneOf('normal').use('stylus-loader') */
              {
                loader: "stylus-loader",
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
        ],
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () {
            /* omitted long function */
          },
        ],
        use: [
          /* config.module.rule('js').use('thread-loader') */
          {
            loader:
              "/Users/yan/git/rspack-vue/node_modules/thread-loader/dist/cjs.js",
          },
          /* config.module.rule('js').use('babel-loader') */
          {
            loader:
              "/Users/yan/git/rspack-vue/node_modules/babel-loader/lib/index.js",
            options: {
              cacheCompression: false,
              cacheDirectory:
                "/Users/yan/git/rspack-vue/node_modules/.cache/babel-loader",
              cacheIdentifier: "6624305c",
            },
          },
        ],
      },
      /* config.module.rule('ts') */
      {
        test: /\.ts$/,
        use: [
          /* config.module.rule('ts').use('thread-loader') */
          {
            loader:
              "/Users/yan/git/rspack-vue/node_modules/thread-loader/dist/cjs.js",
          },
          /* config.module.rule('ts').use('babel-loader') */
          {
            loader:
              "/Users/yan/git/rspack-vue/node_modules/babel-loader/lib/index.js",
          },
          /* config.module.rule('ts').use('ts-loader') */
          {
            loader: "/Users/yan/git/rspack-vue/node_modules/ts-loader/index.js",
            options: {
              transpileOnly: true,
              appendTsSuffixTo: ["\\.vue$"],
              happyPackMode: true,
            },
          },
        ],
      },
      /* config.module.rule('tsx') */
      {
        test: /\.tsx$/,
        use: [
          /* config.module.rule('tsx').use('thread-loader') */
          {
            loader:
              "/Users/yan/git/rspack-vue/node_modules/thread-loader/dist/cjs.js",
          },
          /* config.module.rule('tsx').use('babel-loader') */
          {
            loader:
              "/Users/yan/git/rspack-vue/node_modules/babel-loader/lib/index.js",
          },
          /* config.module.rule('tsx').use('ts-loader') */
          {
            loader: "/Users/yan/git/rspack-vue/node_modules/ts-loader/index.js",
            options: {
              transpileOnly: true,
              happyPackMode: true,
              appendTsxSuffixTo: ["\\.vue$"],
            },
          },
        ],
      },
    ],
  },
  optimization: {
    realContentHash: false,
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          name: "chunk-vendors",
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: "initial",
        },
        common: {
          name: "chunk-common",
          minChunks: 2,
          priority: -20,
          chunks: "initial",
          reuseExistingChunk: true,
        },
      },
    },
    minimizer: [
      /* config.optimization.minimizer('terser') */
      new TerserPlugin({
        terserOptions: {
          compress: {
            arrows: false,
            collapse_vars: false,
            comparisons: false,
            computed_props: false,
            hoist_funs: false,
            hoist_props: false,
            hoist_vars: false,
            inline: false,
            loops: false,
            negate_iife: false,
            properties: false,
            reduce_funcs: false,
            reduce_vars: false,
            switches: false,
            toplevel: false,
            typeofs: false,
            booleans: true,
            if_return: true,
            sequences: true,
            unused: true,
            conditionals: true,
            dead_code: true,
            evaluate: true,
          },
          mangle: {
            safari10: true,
          },
        },
        parallel: true,
        extractComments: false,
      }),
      /* config.optimization.minimizer('css') */
      new CssMinimizerPlugin({
        parallel: true,
        minimizerOptions: {
          preset: [
            "default",
            {
              mergeLonghand: false,
              cssDeclarationSorter: false,
            },
          ],
        },
      }),
    ],
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"',
        BASE_URL: '"/"',
      },
    }),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin({
      additionalTransformers: [
        function () {
          /* omitted long function */
        },
      ],
      additionalFormatters: [
        function () {
          /* omitted long function */
        },
      ],
    }),
    /* config.plugin('extract-css') */
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    /* config.plugin('html') */
    new HtmlWebpackPlugin({
      title: "rspack-vue",
      scriptLoading: "defer",
      templateParameters: function () {
        /* omitted long function */
      },
      template: "/Users/yan/git/rspack-vue/public/index.html",
    }),
    /* config.plugin('copy') */
    new CopyPlugin({
      patterns: [
        {
          from: "/Users/yan/git/rspack-vue/public",
          to: "/Users/yan/git/rspack-vue/dist",
          toType: "dir",
          noErrorOnMissing: true,
          globOptions: {
            ignore: [
              "**/.DS_Store",
              "/Users/yan/git/rspack-vue/public/index.html",
            ],
          },
          info: {
            minimized: true,
          },
        },
      ],
    }),
    /* config.plugin('eslint') */
    new ESLintWebpackPlugin({
      extensions: [".js", ".jsx", ".vue", ".ts", ".tsx"],
      cwd: "/Users/yan/git/rspack-vue",
      cache: true,
      cacheLocation:
        "/Users/yan/git/rspack-vue/node_modules/.cache/eslint/4768fac2.json",
      context: "/Users/yan/git/rspack-vue",
      failOnWarning: false,
      failOnError: true,
      eslintPath: "/Users/yan/git/rspack-vue/node_modules/eslint",
      formatter: "stylish",
    }),
    /* config.plugin('fork-ts-checker') */
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        extensions: {
          vue: {
            enabled: true,
            compiler:
              "/Users/yan/git/rspack-vue/node_modules/vue-template-compiler/index.js",
          },
        },
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
    }),
  ],
  entry: {
    app: ["./src/main.ts"],
  },
};

console.log(config);
