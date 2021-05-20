import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
  return (
      <div className={classes.post}>
        <img src='https://forums.ultra-combo.com/uploads/default/original/2X/6/6a0f33ec1ed9a221290497c143bdbf3e4763df91.jpg' alt='avatar'/>
        <div className={classes.postContent}>{props.message}</div>
        <span className={classes.likesButton}>like</span>
        <span className={classes.likesCountContainer}>{props.likesCount}</span>
      </div>
  );
};

export default Post;