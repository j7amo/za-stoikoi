import React from 'react';
// import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
  return (
      <div>
        <ProfileInfo/>
        <MyPostsContainer/>
      </div>
  );
};

export default Profile;