import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      numeroDeCliques: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((prevState, props) => ({
      numeroDeCliques: prevState.numeroDeCliques + 1
    }))
  }
  render() {
    return <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
  }
}

export default App;
