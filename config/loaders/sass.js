module.exports = {
  test: /\.(scss|sass)$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        modules: true,
        importLoaders: 1,
        localIdentName: '[name]__[local]___[hash:base64:5]',
        sourceMap: true,
        minimize: true
      }
    },
    'sass-loader'
  ]
}
