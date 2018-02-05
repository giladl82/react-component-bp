const path = require('path');
const pascalcase = require('pascalcase');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const appName = pascalcase(__dirname.split('/').pop());

const vendorModules = [
 // 'classnames',
 // 'react-dom',
 // 'react',
 // 'react-addons-css-transition-group',
 // 'react-intl',
 // 'react-modal',
 // 'react-redux',
 // 'react-router-dom',
 // 'redux',
 // 'redux-thunk'
]

// extracting comon modules to vendor
// const CommonsChunkPluginConfig = new webpack.optimize.CommonsChunkPlugin({
//   name: 'vendors',
//   filename: 'vendors.[hash].js'
// })

const CleanWebpackPluginConfig = new CleanWebpackPlugin([
  path.join(__dirname, `build`)
])

module.exports = {
  entry: {
    component: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.join(__dirname, `build`),
    filename: appName + '.js',
    library: appName,
    chunkFilename: '[id].chunk.js',
    sourceMapFilename: appName + '.map.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules|bower_components|build)/
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components|build)/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { modules: true, importLoaders: 1 } },
          {loader: 'postcss-loader', options: {
            config: {
              path: './postcss.config.js'
            }
          }}
        ]
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: [ {
          loader: 'url-loader',
          options: { limit: 10000 } // Convert images < 10k to base64 strings
        }]
      }
    ]
  },
  plugins: [ CleanWebpackPluginConfig] //, CommonsChunkPluginConfig]
}