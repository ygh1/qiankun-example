const appName = require('./package.json').name;
module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: 8083
  },
  output: {
    library: `${appName}-[name]`,
    libraryTarget: 'umd',
    uniqueName: `webpackJsonp_${appName}`,
  },
};