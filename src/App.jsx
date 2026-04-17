import React from 'react';
import Dock from './components/Dock';
import Nav from './components/Nav';
import './app.scss';
import Github from './components/windows/Github';
import Note from './components/windows/Note';
import Resume from './components/windows/Resume';
import Spotify from './components/windows/Spotify'; 

function App() {

  return (
    <main>
      <Nav />
      <Dock />

      <Github />
      <Note />
      <Resume />
      <Spotify />
    </main>
  )
}

export default App
