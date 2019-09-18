// 1. 导入包
import React from 'react'
import ReactDOM from 'react-dom'

// 2. 创建虚拟DOM元素
// 什么是虚拟DOM 用JS对象的形式，来表示DOM和DOM之间的嵌套关系
// const mydiv = React.createElement('div', {
//   id: 'mydiv',
//   title: 'div aaaa'
// }, '这是一个div元素')

// 在js文件中，默认不能写这种类似于HTML的标记；否则打包会失败
// 可以使用babel来转换这些js中的标签
// 这种在js中，混合写入类似于HTML的语法，叫做JSX语法，符合XML规范的js；
// JSX语法的本质，还是在运行的时候，被转换成了React.createElement形式来执行的
// const mydiv = <div id="mydiv" title="div aaa">
//   <p>Hello world</p>
//   <p>Hello world</p>
//   <p>Hello world</p>
//   <p>Hello world</p>
// </div>

let a = 10
let boo = true;
const h1 = <h1>红红火火</h1>
const arr = [
  <p>123123123</p>,
  <p>456456456</p>
]


const arrStr = ['rng','edg','we'];

//定义一个空数组，将来用来存放名称标签
const nameArr = [];
arrStr.forEach(item => {
  const temp = <h5>{item}</h5>
  nameArr.push(temp)
})

//数组的map方法 map方法必须加返回值

// 3. 调用render函数渲染 有点类似于vue中的{{}} 插值表达式 同样也可以运算 因为是类xml所以必须闭合
// 什么情况下需要使用{}呢？当我们需要在JSX控制的区域内，写JS表达式了，则需要把JS代码写到{}中
// 箭头函数，如果省略花括号，则return也可以省略
ReactDOM.render(<div>
  {a + 2}
  {boo}
  <hr/>
  {h1},
  {arr}
  <hr/>
  {arrStr.map(item => {
    return <h3>{item}</h3>
  })}
</div>, document.getElementById('app'))