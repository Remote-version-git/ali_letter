const webpack = require('webpack')

module.exports = {
    devServer: {
        open: true,
<<<<<<< HEAD
        hot: true
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                'window.$': 'jquery'
            })
        ]
=======
        hot: true,
        proxy: {
            '/api':{
                // target:'http://jsonplaceholder.typicode.com',
                target:'http://127.0.0.1:1314/api',
                changeOrigin:true,
                 pathRewrite:{
                     '/api':''
                 }
            }
>>>>>>> 38341cb942813d7810c0f20d7091e650a32fd56d
    }
    },
}