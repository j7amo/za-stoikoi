import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Header/>
          <Navbar/>
          <div className='app-wrapper-content'>
            <Route path='/profile' render={() => <ProfileContainer store={props.store}/>}/>
            <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
            <Route path='/news' render={() => <News/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
