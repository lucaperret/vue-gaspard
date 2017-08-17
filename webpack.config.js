const PACKAGE = require('./package.json')
const path = require('path')
const webpack = require('webpack')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = dir => path.join(__dirname, dir)
const banner = PACKAGE.name + ' | ' +
  '(c) ' + new Date().getFullYear() + '  ' + PACKAGE.author + ' | ' +
  PACKAGE.license + ' | ' +
  PACKAGE.homepage

const configDevevelopment = {
  entry: './demo/src/main.js',
  output: {
    filename: 'demo.js'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'plugin': resolve('src/index.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('demo/src')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [resolve('demo/src')],
        options: {
          loaders: {
            css: 'vue-style-loader!css-loader'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('demo/src')]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: [resolve('demo')],
    hot: true,
    watchContentBase: true
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './demo/index.html'
    })
  ]
}

const configProduction = {
  entry: './src/index.js',
  output: {
    filename: 'vue-gaspard.umd.js',
    path: resolve('dist'),
    library: 'vue-gaspard',
    libraryTarget: 'umd'
  },
  externals: {
    vue: 'vue',
    gaspard: 'gaspard'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.BannerPlugin(banner),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: true
      }
    })
  ]
}

module.exports = (env) => {
  return env && env.production ? configProduction : configDevevelopment
}
