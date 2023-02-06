import React from 'react';
import PostsList from '../features/postsList/PostsList';
import NavBar from '../components/NavBar/NavBar';
import Subreddits from '../components/Subreddits/Subreddits';
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="nav-bar">
        <NavBar />  
      </div>
      <div className="main-content">
        <Subreddits />
        <PostsList />  
      </div>
    </div>
  );
}

export default App;