// console.log('ooo kkk ccc ddd eeeee');

// webpack-dev-server打包好的main.js是托管到了内存中，所以在项目根目录中看不到
// 但是我们可以认为在项目根目录中，假装存在一个

// 这两个导入的时候，接收的成员名称，必须这么写（其他的无所谓）
import React from 'react' // 创建组件、虚拟DOM元素，生命周期
import ReactDOM from 'react-dom' // 把创建好的组件和虚拟DOM放到页面上展示的

// 创建虚拟DOM元素
// 参数1. 创建的元素的类型, 字符串 表示元素的名称
// 参数2. 是一个对象或null，表示当前这个DOM元素的属性
// 参数3. 子节点（包括其他虚拟DOM获取文本子节点）
// 参数n: 其他子节点
// 例子：<h1 id="myh1" title="this is a h1">这是一个h1</h1>
const h1Obj = React.createElement('h1', {
  id: 'myh1',
  title: 'this is a h1'
}, '这是一个h1')

const mydiv = React.createElement('div', null, '这是一个div元素', h1Obj);

// 渲染页面上的DOM结构，最好的方式，就是写HTML代码
// const mytest = <div> aaa </div>

// 使用ReactDOM把虚拟DOM渲染到页面上
// 参数1：要渲染的虚拟DOM元素
// 参数2：指定页面上一个容器（和vue不一样，这里一定要是DOM元素而不是选择器）
ReactDOM.render(mydiv, document.getElementById('app'))