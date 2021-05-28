import React from 'react';
import {addPostActionCreator, newPostTextUpdateActionCreator} from '../../../redux/profile-page-reducer.js';
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

  const addPostHandler = () => {
    props.dispatch(addPostActionCreator());
  };

  const updateNewPostTextHandler = (text) => {
    props.dispatch(newPostTextUpdateActionCreator(text));
  };

  return (
      <MyPosts updateNewPostTextHandler={updateNewPostTextHandler}
               addPostHandler={addPostHandler}
               posts={props.state.posts}
               newPostText={props.state.newPostText}/>
  );
};

export default MyPostsContainer;