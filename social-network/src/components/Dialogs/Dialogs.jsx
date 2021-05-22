import React from "react";
import classes from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

  const jsxDialogs = props.dialogsData.map((dialog) => <Dialog name={dialog.name} id={dialog.id}/>);
  const jsxMessages = props.messagesData.map((message) => <Message message={message.text}/>);

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
