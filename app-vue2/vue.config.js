const { name } = require('./package');
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  publicPath: isProd ? '/child/app-vue2' : '/',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: 8082
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};