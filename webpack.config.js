const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	entry: {
		polyfills: path.resolve(__dirname, './polyfills.ts'),
		app: path.resolve(__dirname, './app.module.ts'),
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{ test: /\.ts/, use: [ 'awesome-typescript-loader' ] }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
		}),
	]
};

module.exports = config;