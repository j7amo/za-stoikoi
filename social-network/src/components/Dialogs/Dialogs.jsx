import React from 'react';
import classes from './Dialogs.module.css'
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {

  const jsxDialogs = props.messagesPage.dialogsData.map((dialog) =>
      <Dialog name={dialog.name} avatar={dialog.avatar} id={dialog.id}/>);
  const jsxMessages = props.messagesPage.messagesData.map((message) =>
      <Message message={message.text} messageType={message.messageType}/>);

  const textAreaRef = React.createRef();

  const onSendMessageButtonClick = () => {
    props.sendMessageButtonClickHandler();
  };

  const onNewMessageTextUpdate = () => {
    props.newMessageTextUpdateHandler(textAreaRef.current.value);
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
          <textarea placeholder='Start typing here!' onChange={onNewMessageTextUpdate} ref={textAreaRef} value={props.messagesPage.newMessageText}/>
          <button onClick={onSendMessageButtonClick}>Send message</button>
        </div>
      </div>
  );
};

export default Dialogs;
