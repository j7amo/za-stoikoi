import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const posts = [
  {
    message: 'Пошли бухать!',
    likesCount: '21',
  },
  {
    message: 'Привет! Как дела?',
    likesCount: '3',
  },

];

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

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
