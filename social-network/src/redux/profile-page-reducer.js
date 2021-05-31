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

  switch (action.type) {
    case ActionType.ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: 5,
            message: state.newPostText,
            likesCount: 0,
          }
        ],
        newPostText: '',
      };
    case ActionType.UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.text,
      };
    default:
      return state;
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