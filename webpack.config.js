const webpack = require('webpack');
const path = require('path');
// 清理打包文件夹
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 打包html的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log("process.env.NODE_ENV：", process.env.NODE_ENV);
const isEnvDevelopment = process.env.NODE_ENV === 'development';
const isEnvProduction = process.env.NODE_ENV === 'production';

module.exports = {
	
	// 开发工具
	devtool: isEnvProduction ? 'source-map' : isEnvDevelopment && 'cheap-module-source-map',

	// 模式
	mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',

	// 入口
	entry: {
		reactkey: "./src/reactkey.js",
		test: "./test/test.js"
	},

	// 输出
	output: {
		path: path.resolve(__dirname, "lib"),
		filename: '[name].js',
		libraryTarget: 'umd'
	},

	// 模板
	module: {
		rules: [
			// es6 转 es5
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						babelrc: false,
						compact: true,
						presets: [
							"@babel/preset-env",
							"@babel/preset-react"
						],
						plugins: []
					}
				}
			}
		]
	},

	// 排除某个库
	externals: {
		'React': 'react',
		'ReactDOM': 'react-dom'
	},

	// 插件
	plugins: [

		// 清理
		isEnvProduction && new CleanWebpackPlugin(),

		// 模块热替换
		isEnvDevelopment && new webpack.NamedModulesPlugin(),
		isEnvDevelopment && new webpack.HotModuleReplacementPlugin(),

		// 打包 test.html
		new HtmlWebpackPlugin({
			title: 'test',
			filename: 'test.html',
			template: `test/test.html`,
			inject: true,
			chunks: ['test'],
		})

	].filter(Boolean),

	// Some libraries import Node modules but don't use them in the browser.
	// Tell Webpack to provide empty mocks for them so importing them works.
	node: {
		module: 'empty',
		dgram: 'empty',
		dns: 'mock',
		fs: 'empty',
		http2: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty',
	},
}
