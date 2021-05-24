import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

  const jsxPosts = props.posts.map((post) => <Post message={post.message} likesCount={post.likesCount}/>);

  const textAreaRef = React.createRef();

  const onAddPostHandler = () => {
    props.addPost(textAreaRef.current.value);
    textAreaRef.current.value = '';
  };

  return (
        <div className={classes.posts}>
          <div className={classes.newPost}>
            <textarea ref={textAreaRef}/>
            <button onClick={onAddPostHandler}>Add post</button>
          </div>
          <div className={classes.existingPosts}>
            {jsxPosts}
          </div>
        </div>
  );
};

export default MyPosts;