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
  * LICENSE 文件（软件版权）
  * package.json 文件（定义项目所需要的各种模块，以及项目的配置信息）
  * README.md 文件（自述文件）
  * webpack.config.js（webpack 配置）
  * jsdoc.config.js（jsdoc 配置）
  * jsdoc.css（jsdoc 样式修改）

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

#### jsdoc 注释文档
  * 安装 vs code 插件：Document This，快捷键：Ctrl+Alt+D,Ctrl+Alt+D
  * 安装依赖
  ```
    yarn add jsdoc --save-dev
    yarn add tui-jsdoc-template // 输出模板样式
  ```
  * jsdoc.config.js 配置文件(jsdoc.config.js)
  * 输出文档(jsdoc)
   ```
    // 1、-d 指定注释文档输出路径（已经在 jsdoc.config.js 进行指定）
    // 2、-c 告诉jsdoc自定义配置文件的位置
    // 3、-r 告诉jsdoc循环source.include文件夹的子目录
    jsdoc -c jsdoc.config.js -r
   ```