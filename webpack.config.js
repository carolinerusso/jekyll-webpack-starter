const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  watch: true,
	entry: './_source/index.js',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '_includes/assets')
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
				test: /\.scss$/,
				use: [
					'style-loader', // creates style nodes from JS strings
					MiniCssExtractPlugin.loader, //generate another file
					'css-loader', // translates CSS into CommonJS
					'sass-loader' // compiles Sass to CSS
				]
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