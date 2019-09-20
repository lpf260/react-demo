import React from 'react'
// import React, {Component} from 'react'
import ReactDOM from 'react-dom'

//导入Hello组件 如果不做单独配置，不能省略.jsx后缀名
import Hello from '@/components/Hello'

// import './class继承'

// 关键字创建组件
class Movie extends React.Component{
  // 构造器
  constructor(){
    // 由于继承，所以必须调用super
    super()
    // 只有调用了super()以后，才能使用this关键字 // 这个this.state = {}有点类似于vue中的data(){return {}}
    this.state = {
      msg: '大家好，我是Movie组件'
    } 
  }

  // 必须定义render函数
  // render函数的作用，是渲染当前组件所对应的虚拟DOM元素
  render(){
    // render函数中，必须返回DOM结构或者null
    // 在class关键字创建的组件中，如果想使用外界传递过来的props参数，不需要接受，直接通过this.props.***访问即可 
    // 不论是class创建的组件还是function创建的组件，他们的props都是只读的
    return <div>
      这是MOVIE组件----{this.props.name} {this.props.age}
      <h3>{this.state.msg}</h3>
    </div>;
  }
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
  <Movie {...dog}></Movie>
  <hr/>
</div>, document.getElementById('app'))