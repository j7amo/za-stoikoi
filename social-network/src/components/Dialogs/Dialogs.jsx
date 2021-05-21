import React from "react";
import classes from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = () => {
  const dialogsData = [
    {
      name: 'Vasya',
      id: '1',
    },
    {
      name: 'Jora',
      id: '2',
    },
    {
      name: 'Petya',
      id: '3',
    },
    {
      name: 'Valera',
      id: '4',
    },
    {
      name: 'Kolya',
      id: '5',
    },
  ];

  const messagesData = [
    {
      text: 'Здоров! Бухаешь?',
      id: '1',
    },
    {
      text: 'Не, восстанавливаю печень...',
      id: '2',
    },
  ];

  const jsxDialogs = dialogsData.map((dialog) => <Dialog name={dialog.name} id={dialog.id}/>);
  const jsxMessages = messagesData.map((message) => <Message message={message.text}/>);

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
