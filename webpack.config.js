const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg|webp)$/i,
        use: [
          'file-loader?hash=sha512&digest=hex&name=[name].[ext]', //[name] can be [hash] for uniq file names
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 50
              },
            }
          }
        ]
      }
    ]
  },
};