import {ActionType} from './store.js';

const initialState = {
  users: [
    {
      id: 1,
      fullName: 'Roma T.',
      status: 'IT-noob',
      location: {
        city: 'Moscow',
        country: 'Russia',
      },
      avatar: '',
      followed: true,
    },
    {
      id: 2,
      fullName: 'Vasya P.',
      status: 'I like to move it!',
      location: {
        city: 'Djigurda',
        country: 'Bangladesh',
      },
      avatar: '',
      followed: false,
    },
    {
      id: 3,
      fullName: 'Kolya D.',
      status: 'Hello darkness my old friend',
      location: {
        city: 'London',
        country: 'Israel',
      },
      avatar: '',
      followed: true,
    },
    {
      id: 4,
      fullName: 'Dusya G.',
      status: 'I\'m dancing in the rain',
      location: {
        city: 'Moscow',
        country: 'Russia',
      },
      avatar: '',
      followed: false,
    },
  ],
};

const usersPageReducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.FOLLOW_USER:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {...user, followed: true};
          }
          return user;
        }),
      };
    case ActionType.UNFOLLOW_USER:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {...user, followed: false};
          }
          return user;
        }),
      };
    default:
      return state;
  }
};

export const followUserActionCreator = (userId) => {
  return {
    userId,
    type: ActionType.FOLLOW_USER,
  };
};

export const unfollowUserActionCreator = (userId) => {
  return {
    userId,
    type: ActionType.UNFOLLOW_USER,
  };
};

export default usersPageReducer;