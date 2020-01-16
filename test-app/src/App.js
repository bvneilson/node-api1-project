import React from 'react';
import logo from './logo.svg';
import './App.css';

import UserList from './components/UserList.js';
import NewUser from './components/NewUser.js';

function App() {
  return (
    <div className="App">
      <UserList />
      <NewUser />
    </div>
  );
}

export default App;
