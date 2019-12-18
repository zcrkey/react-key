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

### 开发流程

#### 初始化 package.json 文件,输入相关信息
  ```
    npm init
  ```

#### webpack 打包，配置 webpack.config.js 文件
  ```
    yarn add webpack webpack-cli webpack-dev-server --dev
  ```

#### 本地全局安装 npm 包，引用 npm 包
  * 在本项目执行 npm link 后，会在本地全局安装 react-key npm 包
  ```
    npm link
  ```
  * 在需要用到 react-key 包的项目中执行 npm link react-key，则会在 node_modules 中安装 react-key 包
  ```
    npm link react-key
  ```
  * 总结
  ```
    在 A 包里
    npm link    // 相当于npm install A -g
    在 B 包里
    npm link A    // 代码无需修改，B包的 node_modules 中引用 A 的包（会自动指向本地 A 包的打包文件）
  ```
  * 如果你是使用yarn的话，也有yarn link，而且yarn link还不会污染全局环境（未测试）