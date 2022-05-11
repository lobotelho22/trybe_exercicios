import React from 'react';
import './App.css';

function theMessage(event) {
  console.log('Toca Pintinho!');
}

class App extends React.Component {
  render () {
    return (
    <div className="App">
      <button onClick={theMessage}>Toca Pintinho!</button>
      <button onClick={theMessage}>Sambarilove!</button>
      <button onClick={theMessage}>Sabo-lho!</button>
    </div>
  );
  }
}

export default App;
