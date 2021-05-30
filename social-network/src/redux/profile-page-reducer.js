import {ActionType} from './store.js';

const initialState = {
  posts: [
    {
      id: 1,
      message: 'Пошли бухать!',
      likesCount: 21,
    },
    {
      id: 2,
      message: 'Привет! Как дела?',
      likesCount: 3,
    },
  ],
  newPostText: '',
};

const profilePageReducer = (state = initialState, action) => {
  const stateCopy = {...state};
  stateCopy.posts = [...state.posts];
  switch (action.type) {
    case ActionType.ADD_POST:
      const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      }
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    case ActionType.UPDATE_NEW_POST_TEXT:
      stateCopy.newPostText = action.text;
      return stateCopy;
    default:
      return stateCopy;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ActionType.ADD_POST,
  };
};

export const newPostTextUpdateActionCreator = (text) => {
  return {
    type: ActionType.UPDATE_NEW_POST_TEXT,
    text: text,
  };
};

export default profilePageReducer;