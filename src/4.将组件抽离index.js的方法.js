// 组件中必须引入react
import React from 'react'

// 第一种创建组件的方式(创建并导出)
export default function Hello(props){
  //用props接收传递的参数
  // 如果在一个组件中return null， 则表示此组件是空的，什么都不会渲染
  // 在组件中，必须返回一个合法的 JSX 虚拟DOM元素
  console.log(props)
  // 不论是Vue还是React，组件中的props永远都是只读的，不能被重新赋值
  return <div>我是一条狗，名字叫{props.name} 年龄:{props.age} 爱好{props.hobby}</div>
}

// 把组件暴露出去
// export default Hello