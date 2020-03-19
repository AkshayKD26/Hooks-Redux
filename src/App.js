import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import './App.css';
// Components
import ToDoInput from './component/ToDoInput';
import ToDoList from './component/ToDoList';
const App = () => (
  <Provider store={store}>
    <div className="main">
      <ToDoInput />
      <ToDoList />
    </div>
  </Provider>
);

export default App;