const webpack = require("webpack");

module.exports = {
  devServer: {
    open: true,
    hot: true
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        "window.$": "jquery"
      })
    ]
  }
};
