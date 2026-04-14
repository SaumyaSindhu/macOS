import React from 'react';
import Dock from './components/Dock';
import Nav from './components/Nav';
import './app.scss';
import MacWindow from './components/windows/MacWindow';

function App() {

  return (
    <main>
      <Nav />
      <Dock />

      <MacWindow />
    </main>
  )
}

export default App
