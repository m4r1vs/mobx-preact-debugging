const path = require('path')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		main: path.join(__dirname, 'index.js')
	},
	output: {
		path: path.resolve(__dirname, './build'),
		publicPath: '/',
		pathinfo: true,
		filename: '[name].bundle.js'
	},
	plugins: [
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
							["env"]
						],
						plugins: [
							[require.resolve('babel-plugin-transform-decorators-legacy')],
							[require.resolve('babel-plugin-transform-class-properties')],
							[require.resolve('babel-plugin-transform-react-jsx'), { pragma: 'h' }]
						]
					}
				}
			}
		]
	}
}