import React from 'react';
import PostsList from '../features/postsList/PostsList';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Subreddits from '../components/Subreddits/Subreddits';
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Subreddits />
        <PostsList />
      </main>
      <Footer />
    </>
  );
}

export default App;