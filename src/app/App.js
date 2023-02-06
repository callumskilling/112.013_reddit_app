import React from 'react';
import PostsList from '../features/postsList/PostsList';
import NavBar from '../components/NavBar/NavBar';
import Subreddits from '../components/Subreddits/Subreddits';
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Subreddits />
      <PostsList />
    </div>
  );
}

export default App;