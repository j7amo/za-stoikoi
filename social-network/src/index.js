import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store.js';
import ReactDOM from 'react-dom';
import App from './App';

const renderEntireTree = (store) => {
  ReactDOM.render(
      <React.StrictMode>
        <App store={store}/>
      </React.StrictMode>,
      document.getElementById('root')
  );
}

renderEntireTree(store);

store.subscribe(() => renderEntireTree(store));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
