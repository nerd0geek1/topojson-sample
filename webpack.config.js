const path = require('path');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.ts"),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts"]
  }
};
