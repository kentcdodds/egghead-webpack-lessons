module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname
  },

  devtool: 'eval-source-map',

  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel!jshint', exclude: /node_modules/},
      {test: /\.less$/, loader: 'style!css!less', exclude: /node_modules/},
      {test: /\.styl$/, loader: 'style!css!stylus', exclude: /node_modules/},
      {test: /\.png$/, loader: 'url', exclude: /node_modules/}
    ]
  },
  jshint: {
    emitErrors: true,
    failOnHint: true
  }
};
