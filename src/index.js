import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

const updateBodyClass = (isDarkMode) => {
  const body = document.querySelector('body');
  if (isDarkMode) {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
};

store.subscribe(() => {
  const state = store.getState();
  updateBodyClass(state.isDarkMode);
});

updateBodyClass(store.getState().isDarkMode);
