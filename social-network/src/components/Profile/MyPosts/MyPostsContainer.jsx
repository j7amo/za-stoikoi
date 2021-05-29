import {addPostActionCreator, newPostTextUpdateActionCreator} from '../../../redux/profile-page-reducer.js';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// const MyPostsContainer = () => {
//
//   return (
//       <StoreContext.Consumer>
//         {store => {
//
//           const addPostHandler = () => {
//             store.dispatch(addPostActionCreator());
//           };
//
//           const updateNewPostTextHandler = (text) => {
//             store.dispatch(newPostTextUpdateActionCreator(text));
//           };
//
//           return (
//               <MyPosts updateNewPostTextHandler={updateNewPostTextHandler}
//                        addPostHandler={addPostHandler}
//                        posts={store.getState().profilePage.posts}
//                        newPostText={store.getState().profilePage.newPostText}/>)
//         }
//       }
//       </StoreContext.Consumer>
//   );
// };

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