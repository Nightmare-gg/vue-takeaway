const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
module.exports = {
  // 不检测
  lintOnSave: false,
  css: {

    loaderOptions: {

      postcss: {

        plugins: [

          require('postcss-pxtorem')({ rootValue: 37.5, propList: ['*'] }),

        ],

      },

    },

  },
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },

};