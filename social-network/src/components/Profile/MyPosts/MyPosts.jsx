import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
  return (
        <div className={classes.posts}>
          <div className={classes.newPost}>
            <textarea/>
            <button>Add post</button>
          </div>
          <div className={classes.existingPosts}>
            <Post message='Пошли бухать!' likesCount='21'/>
            <Post message='Привет! Как дела?' likesCount='3'/>
          </div>
        </div>
  );
};

export default MyPosts;