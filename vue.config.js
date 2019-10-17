module.exports = {
    devServer: {
        open: true,
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
    }
    },
}