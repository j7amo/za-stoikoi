import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
      <div>
        <div className={classes.header}>
          <img src='../pictures/cropped-beer-nice.jpg' height='120' alt='Some random beer photo'/>
        </div>
        <div className={classes.aboutContainer}>
          <div className={classes.avatar}>
            <img
                src='https://image.freepik.com/free-vector/gamer-mascot-geek-boy-esports-logo-avatar-with-headphones-and-glasses-cartoon-character_8169-228.jpg'
                alt='User avatar'/>
          </div>
          <div className={classes.aboutMe}>
            <div>Name: Roman</div>
            <div>Age: 37</div>
          </div>
        </div>
      </div>
  );
};

export default ProfileInfo;