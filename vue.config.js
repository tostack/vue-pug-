module.exports = {
    // 选项...
    // module:{
    //     rules:[
    //         {
    //             test:/\.jade$/,
    //             loader:"jade"
    //           },{
    //             test:/\.pug/,
    //             loader:"pug"
    //           },
    //     ]
    // }
    chainWebpack: config => {
        config.module.rule('pug')
            .test(/\.pug$/)
            .use('pug-html-loader')
            .loader('pug-html-loader')
            .end()
    }
  }