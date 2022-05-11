import React from 'react';
import './App.css';

class App extends React.Component {
  handleClick () {
    console.log(this);
    console.log('clicou!')
  }
  render () {
    console.log(this)
    return (
    <div className="App">
      <button onClick={this.handleClick}>Meu Botão</button>
    </div>
  );
  }
}

export default App;
