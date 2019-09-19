// html-webpack-plugin插件 导入在内存中自动生成index页面的插件
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

// 创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, './src/index.html'), //源文件
  filename: 'index.html' // 生成的内存中首页的名称
})


// webpack基于node构建的   export default {}是ES6中向外导出模块的api与之对应的是import XX from '标识符'
// webpack默认只能打包处理.js后缀名类型的文件，像.png .vue无法主动处理，所以要配置第三方的loader
// 这里面一般带s的都是数组，不带s的都是对象
module.exports = {
  mode: "development",
  plugins: [
    htmlPlugin
  ],
  module: {
    rules: [
      // 第三方匹配规则
      {
        test: /\.js|.jsx$/,
        use: 'babel-loader',
        exclude: /node_modules/ //千万不能忘记添加exclude排除项
      }
    ]
  },
  resolve: {
    //表示这几个后缀名的文件名可以省略
    extensions: [
      '.js',
      '.jsx',
      '.json'
    ],
    // 别名
    alias: {
      '@': path.join(__dirname,'./src') // 这样在这个项目中@符号表示项目根目录中src的路径
    }
  }
}

// npm install 中-S和-D有什么区别，-D只在dev环境中用
// 哪些特性node支持？ 如果chrome浏览器支持哪些，则node就支持哪些