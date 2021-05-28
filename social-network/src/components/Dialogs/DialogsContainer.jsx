import React from 'react';
import {sendMessageActionCreator, newMessageTextUpdateActionCreator} from '../../redux/messages-page-reducer.js';
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

  const sendMessageButtonClickHandler = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  const newMessageTextUpdateHandler = (text) => {
    props.store.dispatch(newMessageTextUpdateActionCreator(text));
  };

  return (
      <Dialogs state={props.store.getState().messagesPage}
               sendMessageButtonClickHandler={sendMessageButtonClickHandler}
               newMessageTextUpdateHandler={newMessageTextUpdateHandler}/>
  );
};

export default DialogsContainer;
