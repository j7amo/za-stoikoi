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
            <Post />
            <Post />
          </div>
        </div>
  );
};

export default MyPosts;