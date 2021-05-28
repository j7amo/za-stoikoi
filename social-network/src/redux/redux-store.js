import {combineReducers, createStore} from 'redux';
import profilePageReducer from "./profile-page-reducer";
import messagesPageReducer from "./messages-page-reducer";

const reducers = combineReducers({
  profilePage: profilePageReducer,
  messagesPage: messagesPageReducer
});

const store = createStore(reducers);

export default store;