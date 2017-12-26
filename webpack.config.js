const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: './index.js',
	},
	devtool: 'inline-source-map',
	plugins: [
		new CleanWebpackPlugin(['dist'])
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};