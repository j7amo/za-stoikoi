import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, newPostTextUpdateActionCreator} from '../../../redux/profile-page-reducer.js';

const MyPosts = (props) => {
  const jsxPosts = props.posts.map((post) => <Post message={post.message} likesCount={post.likesCount}/>);

  const textAreaRef = React.createRef();

  const onAddPostButtonClick = () => {
    props.dispatch(addPostActionCreator());
  };

  const onNewPostTextUpdate = () => {
    props.dispatch(newPostTextUpdateActionCreator(textAreaRef.current.value));
  };


  return (
      <div className={classes.posts}>
        <div className={classes.newPost}>
          <textarea placeholder='Start typing here!' onChange={onNewPostTextUpdate} ref={textAreaRef} value={props.newPostText}/>
          <button onClick={onAddPostButtonClick}>Add post</button>
        </div>
        <div className={classes.existingPosts}>
          {jsxPosts}
        </div>
      </div>
  );
};

export default MyPosts;