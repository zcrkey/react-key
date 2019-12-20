const webpack = require('webpack');
const path = require('path');
// 清理打包文件夹
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 打包html的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 打包css的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

console.log("process.env.NODE_ENV：", process.env.NODE_ENV);
const isEnvDevelopment = process.env.NODE_ENV === 'development';
const isEnvProduction = process.env.NODE_ENV === 'production';
const isEnvProductionNPM = process.env.NODE_ENV === 'production-npm';

// 基础配置
let config = {

	// 模板
	module: {
		rules: [

			// babel-loader 装载机（高版本js转低版本js）
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
						plugins: [
						]
					}
				}
			},

			// css 装载机 - 全局
			{
				test: /\.(sa|sc|c)ss$/,
				exclude: /\.module\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: isEnvDevelopment
						},
					},
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: () => [
								// 试图解决所有 flexbug 的问题
								require('postcss-flexbugs-fixes'),
								// 将现代 css 转换为大多数浏览器都能理解的内容，根据目标浏览器或运行时环境确定所需的 polyfill
								require('postcss-preset-env')({
									// 自动添加浏览器样式前缀
									autoprefixer: {},
									// 根据 css 在实现 web 标准过程中的稳定性来确定要 polyfill 的 css 特性
									stage: 3,
								}),
							]
						},
					},
					'sass-loader'
				],
			},

			// css 装载机 - 局部
			{
				test: /\.module\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: isEnvDevelopment
						},
					},
					{
						loader: 'css-loader',
						options: {
							modules: {
								mode: 'local',
								localIdentName: 'rk_style_[local]__[hash:8]'
							}
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: () => [
								// 试图解决所有 flexbug 的问题
								require('postcss-flexbugs-fixes'),
								// 将现代 css 转换为大多数浏览器都能理解的内容，根据目标浏览器或运行时环境确定所需的 polyfill
								require('postcss-preset-env')({
									// 自动添加浏览器样式前缀
									autoprefixer: {},
									// 根据 css 在实现 web 标准过程中的稳定性来确定要 polyfill 的 css 特性
									stage: 3,
								}),
							]
						},
					},
					'sass-loader',
				],
			},

			// 将字体文件作为资源文件存放到指定目录下
			{
				test: [/\.eot$/, /\.ttf$/, /\.svg$/, /\.woff$/, /\.woff2$/],
				loader: 'url-loader',
				options: {
					limit: 10240, // 单位为b，这里设置为10KB，小于10KB，则以 base64 方式存放
					name: 'iconfont/[name].[hash:8].[ext]',
				},
			},

			// 将图片文件作为资源文件存放到指定目录下或者以转化成 base64 方式减少网络请求
			{
				test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
				loader: 'url-loader',
				options: {
					limit: 102400, // 单位为b，这里设置为100KB，小于100KB，则以 base64 方式存放
					name: 'images/[name].[hash:8].[ext]',
				},
			},

		]
	},

	// 插件
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
	],

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

// 测试 NPM （开发模式、产品模式）
if (isEnvDevelopment || isEnvProduction) {

	// 开发工具
	config.devtool = isEnvDevelopment ? 'cheap-module-source-map' : 'source-map';

	// 模式
	config.mode = isEnvDevelopment ? 'development' : 'production';

	if (isEnvDevelopment) {
		// 调试服务
		config.devServer = {
			contentBase: './dist',
			hot: true
		};
	}

	// 入口
	config.entry = {
		...config.entry,
		index: "./test/index.js"
	};

	// 输出
	config.output = {
		...config.output,
		path: path.resolve(__dirname, "dist"),
		filename: '[name].js',
	};

	// 插件
	config.plugins = [
		// 清理
		isEnvProduction && new CleanWebpackPlugin(),
		...config.plugins,
		// 模块热替换
		isEnvDevelopment && new webpack.NamedModulesPlugin(),
		isEnvDevelopment && new webpack.HotModuleReplacementPlugin(),
		// 注入js依赖
		new HtmlWebpackPlugin({
			title: 'index',
			filename: 'index.html',
			template: `test/index.html`,
			inject: true,
			chunks: ['index'],
		})
	].filter(Boolean);

}

// 打包 NPM （产品模式）
if (isEnvProductionNPM) {
	// 开发工具
	config.devtool = 'source-map';

	// 模式
	config.mode = 'production';

	// 入口
	config.entry = {
		...config.entry,
		index: "./src/index.js"
	};

	// 输出
	config.output = {
		...config.output,
		path: path.resolve(__dirname, "lib"),
		filename: '[name].js',
		library: "react-key",
		libraryTarget: 'umd'
	};

	// 插件
	config.plugins = [
		// 清理
		new CleanWebpackPlugin(),
		...config.plugins
	];

	// 排除某个库
	config.externals = {
		...config.externals,
		'react': {
			root: 'React',
			commonjs2: 'react',
			commonjs: 'react',
			amd: 'react',
		},
		'react-dom': {
			root: 'ReactDOM',
			commonjs2: 'react-dom',
			commonjs: 'react-dom',
			amd: 'react-dom',
		},
	};
}

module.exports = config;