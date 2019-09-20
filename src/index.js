import React from 'react'
import ReactDOM from 'react-dom'

// 导入评论项子组件
import CmtList from '@/components/CmtList'

//调用render函数渲染
ReactDOM.render(<CmtList></CmtList>, document.getElementById('app'));