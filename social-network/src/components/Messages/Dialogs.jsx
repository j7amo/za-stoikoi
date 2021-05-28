import React from 'react';
import classes from './Dialogs.module.css'
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import {sendMessageActionCreator, newMessageTextUpdateActionCreator} from '../../redux/messages-page-reducer.js';

const Dialogs = (props) => {

  const jsxDialogs = props.state.dialogsData.map((dialog) =>
      <Dialog name={dialog.name} avatar={dialog.avatar} id={dialog.id}/>);
  const jsxMessages = props.state.messagesData.map((message) =>
      <Message message={message.text} messageType={message.messageType}/>);

  const textAreaRef = React.createRef();

  const onSendMessageButtonClick = () => {
    props.dispatch(sendMessageActionCreator());
  };

  const onNewMessageTextUpdate = () => {
    props.dispatch(newMessageTextUpdateActionCreator(textAreaRef.current.value));
  };

  return (
      <div className={classes.dialogsContainer}>
        <ul className={classes.dialogs}>
          {jsxDialogs}
        </ul>
        <ul className={classes.messages}>
          {jsxMessages}
        </ul>
        <div className={classes.newMessageContainer}>
          <textarea placeholder='Start typing here!' onChange={onNewMessageTextUpdate} ref={textAreaRef} value={props.state.newMessageText}/>
          <button onClick={onSendMessageButtonClick}>Send message</button>
        </div>
      </div>
  );
};

export default Dialogs;
