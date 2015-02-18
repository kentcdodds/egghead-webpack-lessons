module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname
  },

  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
      {test: /\.styl$/, loader: 'style!css!stylus'},
      {test: /\.less$/, loader: 'style!css!less'},
      {test: /\.png$/, loader: 'url', exclude: /node_modules/}
    ]
  }
};