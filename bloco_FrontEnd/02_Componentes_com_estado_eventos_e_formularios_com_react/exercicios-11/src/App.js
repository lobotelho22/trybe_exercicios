import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.theMessage = this.theMessage.bind(this);
  }
  
  theMessage(event) {
    console.log('Toca Pintinho!');
  }

  render () {
    return (
    <div className="App">
      <button onClick={this.theMessage}>Toca Pintinho!</button>
      <button onClick={this.theMessage}>Sambarilove!</button>
      <button onClick={this.theMessage}>Sabo-lho!</button>
    </div>
  );
  }
}

export default App;
