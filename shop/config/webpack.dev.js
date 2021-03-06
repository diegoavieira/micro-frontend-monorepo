const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const port = 8084;

const devConfig = {
  mode: 'development',
  output: {
    publicPath: `http://localhost:${port}/`
  },
  devServer: {
    port
  }
};

module.exports = merge(commonConfig, devConfig);
