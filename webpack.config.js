const path = require('path');

module.exports = {
  entry: './faceavatar.html',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'faceavatar.html',
    publicPath: '/lib/'
  },
  resolve: {
    alias: {
      'node_modules': path.join(__dirname, 'node_modules'),
    }
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: __dirname,
      watch: {
        ignored: '**/*.scss',
        usePolling: false,
      },
    },
    compress: true,
    port: 8080,
  },
};