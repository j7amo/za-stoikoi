import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

  const posts = [
    {
      message: 'Пошли бухать!',
      likesCount: '21',
    },
    {
      message: 'Привет! Как дела?',
      likesCount: '3',
    },

  ];

  const jsxPosts = posts.map((post) => <Post message={post.message} likesCount={post.likesCount}/>);

  return (
        <div className={classes.posts}>
          <div className={classes.newPost}>
            <textarea/>
            <button>Add post</button>
          </div>
          <div className={classes.existingPosts}>
            {jsxPosts}
          </div>
        </div>
  );
};

export default MyPosts;