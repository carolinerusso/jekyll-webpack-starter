const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  watch: true,
  mode: 'development',
  devtool: 'eval',
	entry: './_source/index.js',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
				test: /\.(scss|css)$/,
        use: [{
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          }, 
          MiniCssExtractPlugin.loader, 
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },{
            loader: 'postcss-loader', 
            options: {
              sourceMap: true
            }
          },{
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }]
			}
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css'
    })
  ]
};