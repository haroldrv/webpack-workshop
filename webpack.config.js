const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const mainConfig = environment => require(`./build-utils/webpack.${environment}`)(environment);

module.exports = ({mode, presets} = { mode: 'production', presets: []}) => {
  console.error(mode);
  return {
    mode,
    output: {
      filename: './bundle.js'
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    module: {
      rules: [{
        test: /\.ts?$/,
        loader: 'awesome-typescript-loader'
      }]
    },
    plugins: [
      new HtmlWebpackPlugin(),
      new webpack.ProgressPlugin()
    ],
    devtool: 'source-map'
  }
};