import React from "react";
import './App.css';
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Messages/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter} from "react-router-dom";
import {Route} from 'react-router';

const App = (props) => {
  return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Header/>
          <Navbar/>
          <div className='app-wrapper-content'>
            <Route path='/profile' render={() => <Profile state={props.state.profilePage}
                                                          addPost={props.addPost}
                                                          updateNewPostText={props.updateNewPostText}/>}/>
            <Route path='/dialogs' render={() => <Dialogs state={props.state.messagesPage}/>}/>
            <Route path='/news' render={() => <News/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
