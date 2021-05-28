import React from 'react';
// import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
      <div>
        <ProfileInfo/>
        <MyPostsContainer state={props.state} dispatch={props.dispatch}/>
      </div>
  );
};

export default Profile;