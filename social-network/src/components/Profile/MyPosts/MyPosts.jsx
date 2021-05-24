import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

  const jsxPosts = props.posts.map((post) => <Post message={post.message} likesCount={post.likesCount}/>);

  const textAreaRef = React.createRef();

  const onAddPostButtonClickHandler = () => {
    props.addPost();
  };

  const onNewPostTextUpdateHandler = () => {
    props.updateNewPostText(textAreaRef.current.value);
  };

  return (
        <div className={classes.posts}>
          <div className={classes.newPost}>
            <textarea onChange={onNewPostTextUpdateHandler} ref={textAreaRef} value={props.newPostText}/>
            <button onClick={onAddPostButtonClickHandler}>Add post</button>
          </div>
          <div className={classes.existingPosts}>
            {jsxPosts}
          </div>
        </div>
  );
};

export default MyPosts;