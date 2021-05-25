let renderEntireTree = () => {
  console.log('State changed');
};

const state = {
  profilePage: {
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
    newPostText: 'Start typing here!',
  },

  messagesPage: {
    dialogsData: [
      {
        name: 'Vasya',
        avatar: 'https://img2.freepng.ru/20180716/vra/kisspng-avatar-internet-forum-youtube-runescape-forum-game-lunapic-5b4d024b5f64a2.5037652515317735153907.jpg',
        id: '1',
      },
      {
        name: 'Jora',
        avatar: 'https://i.pinimg.com/236x/26/a9/6f/26a96fa8b0d12030b3a4453963f90e28.jpg',
        id: '2',
      },
      {
        name: 'Petya',
        avatar: 'https://avatarfiles.alphacoders.com/194/thumb-1920-194221.jpg',
        id: '3',
      },
      {
        name: 'Valera',
        avatar: 'https://img2.freepng.ru/20180518/joy/kisspng-internet-forum-avatar-5aff3949b6e803.3109554115266757857492.jpg',
        id: '4',
      },
      {
        name: 'Kolya',
        avatar: 'https://forum.pandawow.ru/image.php?u=73164&dateline=1550477738',
        id: '5',
      },
    ],

    messagesData: [
      {
        text: 'Здоров! Бухаешь?',
        messageType: 'receivedMessage',
        id: '1',
      },
      {
        text: 'Не, печень восстанавливаю...',
        messageType: 'sentMessage',
        id: '2',
      },
    ],
  },
}

export const addPost = () => {
  const newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  }

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  renderEntireTree(state);
};

export const updateNewPostText = (text) => {
  state.profilePage.newPostText = text;
  renderEntireTree(state);
};

export const subscribe = (observer) => {
  renderEntireTree = observer;
};

export default state;