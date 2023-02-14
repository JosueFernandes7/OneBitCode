const path = require('path');

module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
  entry: {
    index: './src/index.js',
  },
  mode: 'development',
  output: {
    filename: '[name].min.js',
  },
  module: {
    rules: [
      { test: /\.css$/, exclude: /node_modules/, use: ["style-loader", "css-loader"] },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
          },
        },
      },
    ],
  },
}
