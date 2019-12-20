# React Key NPM

### 开发环境
* os: windows7
* node: v10.16.1
* npm: 6.9.0
* yarn: 1.21.0

### 目录结构
  * dist 文件夹（打包测试）
  * lib 文件夹（打包成 npm 包）
  * src 文件夹（源代码）
  * test 文件夹（测试）
  * .gitignore 文件（git管理配置）
  * .npmrc 文件(获取npm包配置) 
  * LICENSE 文件（软件版权）
  * package.json 文件（定义项目所需要的各种模块，以及项目的配置信息）
  * README.md 文件（自述文件）
  * webpack.config.js 文件（webpack 配置）
  * jsdoc.config.js 文件（jsdoc 配置）
  * jsdoc.css 文件（jsdoc 样式修改）
  * postcss.config.js 文件（postcss 配置信息）

### 开发流程

#### 初始化 package.json 文件,输入相关信息
  ```
    yarn init
  ```

#### webpack 打包，配置 webpack.config.js 文件
  ```
    yarn add webpack webpack-cli webpack-dev-server --dev
  ```

#### 安装 npm link 和 yarn link react-key
  * 在本项目执行 yarn link
  ```
    yarn link
  ```
  * 在需要用到 react-key 包的项目中执行 yarn link react-key
  ```
    yarn link react-key
  ```
  * 总结
  ```
    // 在 A 包里
    yarn link
    // 在 B 包里
    yarn link A
  ```

#### 卸载 npm unlink 和 yarn unlink react-key
  * 在本项目执行 yarn unlink
  * 在用到 react-key 包的项目中执行 yarn unlink react-key
  * 总结
  ```
    // 在 A 包里
    yarn unlink
    // 在 B 包里
    yarn unlink A
  ```

#### babel-loader 装载机（高版本js转低版本js）
  * 安装依赖
  ```
    yarn add babel-loader --dev
    yarn add @babel/core --dev
    yarn add @babel/preset-env --dev
    yarn add @babel/preset-react --dev // 将 react 进行转换
  ```
  * 添加 webpack.config.js 配置
  ```
    module: {
      rules: [
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
    }
  ```


#### jsdoc 注释文档
  * 安装 vs code 插件：Document This，快捷键：Ctrl+Alt+D,Ctrl+Alt+D
  * 安装依赖
  ```
    yarn add jsdoc --dev
    yarn add tui-jsdoc-template --dev // 输出模板样式
  ```
  *  添加 jsdoc.config.js 配置文件
  * 输出文档(jsdoc)
   ```
    // 1、-d 指定注释文档输出路径（已经在 jsdoc.config.js 进行指定）
    // 2、-c 告诉jsdoc自定义配置文件的位置
    // 3、-r 告诉jsdoc循环source.include文件夹的子目录
    jsdoc -c jsdoc.config.js -r
   ```
  
#### css-loader 装载机、postcss-loader 装载机、sass-loader 装载机、file-loader 装载机（处理 css 集合）
  * 安装依赖
  ```
    yarn add css-loader mini-css-extract-plugin --dev
    yarn add sass-loader node-sass --dev
    yarn add postcss-loader postcss-preset-env postcss-flexbugs-fixes  --dev
  ```
  * mini-css-extract-plugin  css 打包插件
  * css-loader（全局样式、局部样式，其中局部样式的文件名称格式为（xxx.module.css）） 和 sass-loader
  ```
    module: {
      rules: [
        // 局部样式配置信息
        {
          test: /\.module\.(sa|sc|c)ss$/,
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: {
                  mode: 'local',
                  localIdentName: 'rk_style_[local]__[hash:base64:5]'
                }
              }
            },
            'sass-loader'
          ]
        }
      ]
    }
  ```
  * postcss-loader 配置
  ```
  module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          exclude: /\.module\.(sa|sc|c)ss$/,
          use: [
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
            }
          ],
        },
      ]
  }
  ```
  * use 执行顺序说明
  ```
  use:['css-loader','postcss-loader','scss-loader'] // 从后往前执行，即先执行 scss-loader，然后执行 postcss-loader，最后执行 css-loader
  ```
  * 详细参考 webpack.config.js 配置


#### url-loader 装载机
  * 安装依赖
  ```
    yarn add file-loader url-loader --dev
  ```
  * 将图片文件作为资源文件存放到指定目录下或者以转化成 base64 方式减少网络请求
  ```
  module: {
    rules: [
      {
				test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
				loader: 'url-loader',
				options: {
					limit: 102400, // 单位为b，这里设置为100KB，小于100KB，则以 base64 方式存放
					name: 'assets/[name].[hash:8].[ext]',
				},
			}
    ]
  } 
  ```
  * 将字体文件作为资源文件存放到指定目录下
  ```
  module: {
    rules: [
      {
				test: [/\.eot$/, /\.ttf$/, /\.svg$/, /\.woff$/, /\.woff2$/],
				loader: 'url-loader',
				options: {
					limit: 10240, // 单位为b，这里设置为10KB，小于10KB，则以 base64 方式存放
					name: 'iconfont/[name].[hash:8].[ext]',
				},
			}
    ]
  }
  ```