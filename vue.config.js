const { VantResolver } = require('unplugin-vue-components/resolvers');
  const ComponentsPlugin = require('unplugin-vue-components/webpack');
module.exports = {

    css: {
   
      loaderOptions: {
   
        postcss: {
   
          plugins: [
   
            require('postcss-pxtorem')({ rootValue: 16 , propList: ['*']}),
  
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