import React from 'react';
import './App.css';
import CreateButton from './createButton';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Comecemos os Jogos</h1>
        <CreateButton />
        <CreateButton />
        <CreateButton />
      </div>
    );
  }
}

export default App;
