const webpack = require('webpack');
const path = require('path');
// 清理打包文件夹
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 打包html的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log("process.env.NODE_ENV：", process.env.NODE_ENV);
const isEnvDevelopment = process.env.NODE_ENV === 'development';
const isEnvProduction = process.env.NODE_ENV === 'production';

// 基础配置
let config = {

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
	}

}

// development 模式
if (isEnvDevelopment) {

	// 开发工具
	config.devtool = 'cheap-module-source-map';

	// 模式
	config.mode = 'development';

	// 调试服务
	config.devServer = {
		contentBase: './dist',
		hot: true
	};

	// 入口
	config.entry = {
		index: "./test/index.js"
	};

	// 输出
	config.output = {
		path: path.resolve(__dirname, "dist"),
		filename: '[name].js'
	};

	// 插件
	config.plugins = [
		// 模块热替换
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		// 注入js依赖
		new HtmlWebpackPlugin({
			title: 'index',
			filename: 'index.html',
			template: `test/index.html`,
			inject: true,
			chunks: ['index'],
		})
	];

}

// production 模式
if (isEnvProduction) {
	// 开发工具
	config.devtool = 'source-map';

	// 模式
	config.mode = 'production';

	// 入口
	config.entry = {
		index: "./src/index.js"
	};

	// 输出
	config.output = {
		path: path.resolve(__dirname, "lib"),
		filename: '[name].js',
		libraryTarget: 'umd'
	};

	// 插件
	config.plugins = [
		// 清理
		new CleanWebpackPlugin()
	];
}

module.exports = config;