import React from 'react';
import Profile from './Profile';

const ProfileContainer = (props) => {
  return (
        <Profile state={props.store.getState().profilePage} dispatch={props.store.dispatch}/>
  );
};

export default ProfileContainer;