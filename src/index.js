import React from 'react'
import ReactDOM from 'react-dom'

//导入Hello组件 如果不做单独配置，不能省略.jsx后缀名
import Hello from '@/components/Hello'

import './class继承'

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