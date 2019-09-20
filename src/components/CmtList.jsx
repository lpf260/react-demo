import React from "react";
import CmtItem from "@/components/CmtItem";

//导入列表组件需要的样式表 这里直接导入的css样式表默认是在全局上，整个项目上都生效的
import cssobj from "@/css/cmtlist.css";
// console.log(cssobj); //这里为空是因为css没有暴露任何东西

// 使用class关键字，定义父组件
export default class CmtList extends React.Component {
  constructor() {
    super();
    this.state = {
      CommentList: [
        { id: 1, user: "张三", content: "哈哈，沙发" },
        { id: 2, user: "李四", content: "哈哈，板凳" },
        { id: 3, user: "王五", content: "哈哈，凉席" },
        { id: 4, user: "赵六", content: "哈哈，砖头" },
        { id: 5, user: "田七", content: "哈哈，lzsb" }
      ]
    };
  }

  render() {
    return (
      <div>
        {/* 在JSX中，如果想写行内样式了，不能为style设置字符串的值 */}
        <h1 className="title">这是评论列表组件</h1>
        {this.state.CommentList.map(item => (
          <CmtItem {...item} key={item.id}></CmtItem>
        ))}
      </div>
    );
  }
}
