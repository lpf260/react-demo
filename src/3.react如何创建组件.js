import React from 'react'
import ReactDOM from 'react-dom'

// 第一种创建组件的方式
function Hello(props){
  //用props接收传递的参数
  // 如果在一个组件中return null， 则表示此组件是空的，什么都不会渲染
  // 在组件中，必须返回一个合法的 JSX 虚拟DOM元素
  console.log(props)
  // 不论是Vue还是React，组件中的props永远都是只读的，不能被重新赋值
  return <div>我是一条狗，名字叫{props.name} 年龄:{props.age} 爱好{props.hobby}</div>
}

const dog = {
  name: "大黄",
  age: 3,
  hobby: "吃饭"
}
ReactDOM.render(<div>
  123
  {/* 直接以标签形式放在这里 */}
  {/* <Hello name={dog.name}></Hello> 展开运算符  组件首字母必须大写 */}
  <Hello {...dog}></Hello>
</div>, document.getElementById('app'))