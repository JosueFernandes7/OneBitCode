module.exports = {
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
