import React from "react";
import classes from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

  const jsxDialogs = props.state.dialogsData.map((dialog) =>
      <Dialog name={dialog.name} avatar={dialog.avatar} id={dialog.id}/>);
  const jsxMessages = props.state.messagesData.map((message) =>
      <Message message={message.text} messageType={message.messageType}/>);

  return (
      <div className={classes.dialogsContainer}>
        <ul className={classes.dialogs}>
          {jsxDialogs}
        </ul>
        <ul className={classes.messages}>
          {jsxMessages}
        </ul>
      </div>
  );
};

export default Dialogs;
