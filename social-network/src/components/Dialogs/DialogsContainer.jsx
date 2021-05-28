import React from 'react';
import {sendMessageActionCreator, newMessageTextUpdateActionCreator} from '../../redux/messages-page-reducer.js';
import Dialogs from "./Dialogs";
import StoreContext from "../../store-context";

const DialogsContainer = () => {

  return (
      <StoreContext.Consumer>
        {store => {

          const sendMessageButtonClickHandler = () => {
            store.dispatch(sendMessageActionCreator());
          };

          const newMessageTextUpdateHandler = (text) => {
            store.dispatch(newMessageTextUpdateActionCreator(text));
          };
          return (
              <Dialogs state={store.getState().messagesPage}
                       sendMessageButtonClickHandler={sendMessageButtonClickHandler}
                       newMessageTextUpdateHandler={newMessageTextUpdateHandler}/>
          );
        }
        }
      </StoreContext.Consumer>
  );
};

export default DialogsContainer;
