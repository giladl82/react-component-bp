const path = require('path');
const pascalcase = require('pascalcase');
// const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let appName;
if(__dirname.indexOf('\\')) {
  appName = pascalcase(__dirname.split('\\').pop())
} else {
  appName = pascalcase(__dirname.split('/').pop())
}

console.log('App:' + appName);

const CleanWebpackPluginConfig = new CleanWebpackPlugin([
  path.join(__dirname, `build`)
])

module.exports = {
  entry: {
    component: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.join(__dirname, `build`),
    filename: 'index.js',
    library: appName,
    libraryTarget: "umd",
    sourceMapFilename: 'index.map.js'
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
  plugins: [ CleanWebpackPluginConfig]
}