import {ActionType, MessageType} from './state';

const messagesPageReducer = (state, action) => {
  switch(action.type) {
    case ActionType.SEND_MESSAGE:
      const newMessage = {
        id: '5',
        text: state.newMessageText,
        messageType: MessageType.SENT,
      }

      state.messagesData.push(newMessage);
      state.newMessageText = '';
      return state;
    case ActionType.UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.text;
      return state;
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => {
  return {
    type: ActionType.SEND_MESSAGE,
  };
};

export const newMessageTextUpdateActionCreator = (text) => {
  return {
    type: ActionType.UPDATE_NEW_MESSAGE_TEXT,
    text: text,
  };
};

export default messagesPageReducer;