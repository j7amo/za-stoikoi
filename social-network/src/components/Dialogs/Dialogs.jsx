import React from "react";
import classes from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = () => {
  return (
      <div className={classes.dialogsContainer}>
        <ul className={classes.dialogs}>
          <Dialog name='Vasya' id='1'/>
          <Dialog name='Jora' id='2'/>
          <Dialog name='Petya' id='3'/>
          <Dialog name='Valera' id='4'/>
          <Dialog name='Kolya' id='5'/>
        </ul>
        <ul className={classes.messages}>
          <Message message='Здоров! Бухаешь?'/>
          <Message message='Не, восстанавливаю печень...'/>
        </ul>
      </div>
  );
};

export default Dialogs;
