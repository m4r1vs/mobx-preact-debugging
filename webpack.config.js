const path = require('path')
const webpack = require('webpack')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		main: path.join(__dirname, 'index.js')
	},
	devtool: 'cheap-module-source-map',
	output: {
		path: path.resolve(__dirname, './build'),
		publicPath: '/',
		pathinfo: true,
		filename: '[name].bundle.js'
	},
	plugins: [
		// bundles all javascript that different chunks have in common into one file
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common'
		}),
		new HtmlWebPackPlugin({
			template: path.join(__dirname, './template.ejs'),
			inject: true, // injects all JS at the body of the JS file
			filename: 'index.html', // the exported filename
			minify: { // using attributes from https://github.com/kangax/html-minifier#options-quick-reference
				collapseWhitespace: true,
				removeComments: true
			}
		}),
		// using browser-sync to serve files during development (gets only involved when --watch flag present)
		new BrowserSyncPlugin({
			host: 'localhost',
			port: 3000,
			proxy: false,
			server: { baseDir: path.resolve(__dirname, './build') }
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[require.resolve('babel-preset-env'), {
								targets: {
									browsers: [
										"> 1%",
										"IE >= 8",
										"last 2 versions"
									]
								}
							}]
						],
						plugins: [
							[require.resolve('babel-plugin-syntax-dynamic-import')],
							[require.resolve('babel-plugin-transform-decorators-legacy')],
							[require.resolve('babel-plugin-transform-class-properties')],
							[require.resolve('babel-plugin-transform-object-rest-spread')],
							[require.resolve('babel-plugin-transform-react-jsx'), { pragma: 'h' }]
						]
					}
				}
			}
		]
	}
}