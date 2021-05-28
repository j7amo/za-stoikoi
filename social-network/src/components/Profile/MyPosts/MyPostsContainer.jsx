import React from 'react';
import {addPostActionCreator, newPostTextUpdateActionCreator} from '../../../redux/profile-page-reducer.js';
import MyPosts from "./MyPosts";
import StoreContext from "../../../store-context";

const MyPostsContainer = () => {

  return (
      <StoreContext.Consumer>
        {store => {

          const addPostHandler = () => {
            store.dispatch(addPostActionCreator());
          };

          const updateNewPostTextHandler = (text) => {
            store.dispatch(newPostTextUpdateActionCreator(text));
          };

          return (
              <MyPosts updateNewPostTextHandler={updateNewPostTextHandler}
                       addPostHandler={addPostHandler}
                       posts={store.getState().profilePage.posts}
                       newPostText={store.getState().profilePage.newPostText}/>)
        }
      }
      </StoreContext.Consumer>
  );
};

export default MyPostsContainer;