const webpack = require("webpack");

module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery",
      jquery: "jquery",
    }),
  ],
};
