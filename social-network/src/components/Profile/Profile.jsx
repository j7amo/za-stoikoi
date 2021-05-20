import React from "react";
import classes from './Profile.module.css';

const Profile = () => {
  return (
      <div className={classes.content}>
        <div className={classes.header}>
          <img src='../pictures/bar-wine-whats-next-bar.jpg' width='1000' height='200' alt='Some random bar photo'/>
        </div>
        <div className={classes.avatar}>
          <img src='https://image.freepik.com/free-vector/gamer-mascot-geek-boy-esports-logo-avatar-with-headphones-and-glasses-cartoon-character_8169-228.jpg'/>
        </div>
        <div className={classes.aboutMe}>
          description
        </div>
        <div className={classes.posts}>
          My posts
          <div className={classes.newPost}>
            New Post
          </div>
          <div className={classes.existingPosts}>
            Existing posts
            <div className={classes.post}>
              post 1
            </div>
            <div className={classes.post}>
              post 2
            </div>
          </div>
        </div>
      </div>
  );
};

export default Profile;