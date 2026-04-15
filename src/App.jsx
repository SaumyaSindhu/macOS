import React from 'react';
import Dock from './components/Dock';
import Nav from './components/Nav';
import './app.scss';
import Github from './components/windows/Github';

function App() {

  return (
    <main>
      <Nav />
      <Dock />

      <Github />
    </main>
  )
}

export default App
