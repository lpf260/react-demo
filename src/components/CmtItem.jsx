import React from "react";

// import styles from '@/components/styles';
import cssItem from "@/css/cmtitem.scss";

// 使用function构造函数，定义普通的无状态组件
export default function CmtItem(props) {
  return (
    <div className={cssItem.item}>
      <h1 className={cssItem.user}>评论人：{props.user}</h1>
      <p className={cssItem.content}>评论内容：{props.content}</p>
    </div>
  );
}
