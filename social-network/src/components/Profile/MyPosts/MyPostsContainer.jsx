import {addPostActionCreator, newPostTextUpdateActionCreator} from '../../../redux/profile-page-reducer.js';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostTextHandler: (text) => {
      dispatch(newPostTextUpdateActionCreator(text));
    },
    addPostHandler: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;