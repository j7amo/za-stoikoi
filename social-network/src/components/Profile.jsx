import React from "react";

const Profile = () => {
  return (
      <div className='app-content'>
        <div className='content-header'>
          <img src='../pictures/bar-wine-whats-next-bar.jpg' width='1000' height='200' alt='Some random bar photo'/>
        </div>
        <div className='content-logo'>
          <img src='https://image.freepik.com/free-vector/gamer-mascot-geek-boy-esports-logo-avatar-with-headphones-and-glasses-cartoon-character_8169-228.jpg'/>
        </div>
        <div>
          description
        </div>
        <div>
          My posts
          <div>
            New Post
          </div>
          <div>
            Existing posts
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
          </div>
        </div>
      </div>
  );
};

export default Profile;