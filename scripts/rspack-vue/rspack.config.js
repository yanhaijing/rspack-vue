const fs = require('fs');
const rspack = require('@rspack/core');
const { VueLoaderPlugin } = require('vue-loader');
const minifyPlugin = require('@rspack/plugin-minify');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const ESLintPlugin = require('eslint-rspack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const browserslist = require('browserslist');
const getClientEnvironment = require('./env');
const paths = require('./paths');

const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
const isEnvDevelopment = process.env.NODE_ENV === 'development'; // 表示通过 rspack serve 启动
const isEnvProduction = process.env.NODE_ENV === 'production'; // // 表示通过 rspack build 启动

console.log('isEnvDevelopment', isEnvDevelopment);
console.log('isEnvProduction', isEnvProduction);

const disableESLintPlugin = process.env.DISABLE_ESLINT_PLUGIN === 'true';
const useTypeScript = fs.existsSync(paths.appTsConfig);
const env = getClientEnvironment(paths.publicPath);
const resolveApp = paths.resolveApp;

/** @type {import('@rspack/cli').Configuration} */
const config = {
  mode: isEnvProduction ? 'production' : 'development',
  context: paths.appPath,
  entry: {
    app: ['./src/main.ts'],
  },
  output: {
    clean: true,
    publicPath: paths.publicPath,
    path: paths.appBuild,
    filename: isEnvProduction ? 'js/[name].[contenthash:8].js' : 'js/[name].js',
    chunkFilename: isEnvProduction
      ? 'js/[name].[contenthash:8].js'
      : 'js/[name].js',
  },
  devServer: {
    server: 'https',
    host: 'local.yuanfudao.biz',
    hot: true,
    port: 3000,
    allowedHosts: 'all',
    historyApiFallback: true,
  },
  devtool: isEnvProduction
    ? shouldUseSourceMap
      ? 'source-map'
      : false
    : isEnvDevelopment && 'cheap-module-source-map',
  resolve: {
    alias: {
      '@': paths.appSrc,
    },
    extensions: [
      '.tsx',
      '.ts',
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm',
    ],
  },
  experiments: {
    css: true, // 此时需要关闭 `experiments.css` 以适配 `vue-loader` 内部处理逻辑
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              experimentalInlineMatchResource: true,
              compilerOptions: {
                whitespace: 'condense',
              },
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        resourceQuery: /type=style/,
        sideEffects: true,
      },
      {
        test: /\.js/,
        loader: 'builtin:swc-loader',
        options: {
          sourceMap: true,
          env: {
            targets: browserslist(),
            mode: 'usage',
            coreJs: '3',
          },
          jsc: {
            parser: {
              syntax: 'ecmascript',
              jsx: true,
              // dynamicImport: false,
              // privateMethod: false,
              // functionBind: false,
              // classPrivateProperty: false,
              // exportDefaultFrom: false,
              // exportNamespaceFrom: false,
              // decorators: false,
              // decoratorsBeforeExport: false,
              // importMeta: false,
            },
          },
        },
        type: 'javascript/auto',
      },
      {
        test: /\.ts$/,
        loader: 'builtin:swc-loader',
        options: {
          sourceMap: true,
          env: {
            targets: browserslist(),
            mode: 'usage',
            coreJs: '3',
          },
          jsc: {
            parser: {
              syntax: 'typescript',
              decorators: true,
            },
          },
        },
        type: 'javascript/auto',
      },
      {
        test: /\.css$/,
        use: ['postcss-loader'],
        type: 'css',
      },
      {
        test: /\.scss$/,
        use: [
          // "vue-style-loader",
          // "css-loader",
          'postcss-loader',
          'sass-loader',
        ],
        type: 'css',
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[hash:8][ext]',
        },
      },
      {
        test: /\.(png|jpe?g|gif|webp|avif)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'img/[name].[hash:8][ext]',
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'media/[name].[hash:8][ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: 'asset',
        generator: {
          filename: 'fonts/[name].[hash:8][ext]',
        },
      },
    ],
  },
  optimization: {
    realContentHash: false,
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial',
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true,
        },
      },
    },
    // minimize: isEnvProduction,
    minimize: false,
    minimizer: [
      new minifyPlugin({
        minifier: 'terser',
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
      }),
      new rspack.SwcCssMinimizerRspackPlugin(),
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new rspack.DefinePlugin({
      'process.env': {
        ...env.stringified['process.env'],
        BASE_URL: paths.publicPath,
      },
    }),
    // new CaseSensitivePathsPlugin(),
    // new FriendlyErrorsWebpackPlugin({
    //   additionalTransformers: [
    //     function () {
    //       /* omitted long function */
    //     },
    //   ],
    //   additionalFormatters: [
    //     function () {
    //       /* omitted long function */
    //     },
    //   ],
    // }),
    !disableESLintPlugin &&
      new ESLintPlugin({
        extensions: ['.js', '.jsx', '.vue', '.ts', '.tsx'],
        cwd: paths.appPath,
        cache: true,
        cacheLocation: resolveApp('node_modules/.cache/.eslintcache'),
        context: paths.appPath,
        failOnWarning: false,
        failOnError: true,
        eslintPath: resolveApp('node_modules/eslint'),
        formatter: 'stylish',
      }),
    useTypeScript &&
      new ForkTsCheckerWebpackPlugin({
        typescript: {
          extensions: {
            vue: {
              enabled: true,
              compiler: resolveApp(
                './node_modules/vue-template-compiler/index.js'
              ),
            },
          },
          diagnosticOptions: {
            semantic: true,
            syntactic: false,
          },
        },
      }),
    new rspack.HtmlRspackPlugin({
      title: 'rspack-vue',
      scriptLoading: 'defer',
      template: 'public/index.html',
      filename: 'index.html',
      templateParameters: {},
    }),
    new rspack.CopyRspackPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
  ].filter(Boolean),
};
module.exports = config;
