import profilePageReducer from './profile-page-reducer.js';
import messagesPageReducer from './messages-page-reducer.js';

export const ActionType = {
  SEND_MESSAGE: 'SEND-MESSAGE',
  UPDATE_NEW_MESSAGE_TEXT: 'UPDATE-NEW-MESSAGE-TEXT',
  ADD_POST: 'ADD-POST',
  UPDATE_NEW_POST_TEXT: 'UPDATE-NEW-POST-TEXT',
};

const store = {
  _state: {
    profilePage: {
      // posts: [
      //   {
      //     id: 1,
      //     message: 'Пошли бухать!',
      //     likesCount: 21,
      //   },
      //   {
      //     id: 2,
      //     message: 'Привет! Как дела?',
      //     likesCount: 3,
      //   },
      // ],
      // newPostText: '',
    },

    messagesPage: {
      // dialogsData: [
      //   {
      //     name: 'Vasya',
      //     avatar: 'https://img2.freepng.ru/20180716/vra/kisspng-avatar-internet-forum-youtube-runescape-forum-game-lunapic-5b4d024b5f64a2.5037652515317735153907.jpg',
      //     id: '1',
      //   },
      //   {
      //     name: 'Jora',
      //     avatar: 'https://i.pinimg.com/236x/26/a9/6f/26a96fa8b0d12030b3a4453963f90e28.jpg',
      //     id: '2',
      //   },
      //   {
      //     name: 'Petya',
      //     avatar: 'https://avatarfiles.alphacoders.com/194/thumb-1920-194221.jpg',
      //     id: '3',
      //   },
      //   {
      //     name: 'Valera',
      //     avatar: 'https://img2.freepng.ru/20180518/joy/kisspng-internet-forum-avatar-5aff3949b6e803.3109554115266757857492.jpg',
      //     id: '4',
      //   },
      //   {
      //     name: 'Kolya',
      //     avatar: 'https://forum.pandawow.ru/image.php?u=73164&dateline=1550477738',
      //     id: '5',
      //   },
      // ],
      //
      // messagesData: [
      //   {
      //     text: 'Здоров! Бухаешь?',
      //     messageType: MessageType.RECEIVED,
      //     id: '1',
      //   },
      //   {
      //     text: 'Не, печень восстанавливаю...',
      //     messageType: MessageType.SENT,
      //     id: '2',
      //   },
      // ],
      // newMessageText: '',
    },
  },
  _callSubscriber() {
    console.log('State changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profilePageReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesPageReducer(this._state.messagesPage, action);

    this._callSubscriber(this._state);
  }
}

export default store;