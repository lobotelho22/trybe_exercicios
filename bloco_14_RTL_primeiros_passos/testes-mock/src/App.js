import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: '',
    }
  }

  componentDidMount() {
    const API_URL = 'https://icanhazdadjoke.com/';
    fetch(API_URL, { headers: { Accept: 'application/json' } })
      .then((response) => response.json())
      .then((data) => this.setState({ joke: data.joke, id: data.id, status: data.status }));
  }

  render() {
    const { joke } = this.state;
  
    return (
      <div className="App">
        <h1>Teste</h1>
        { joke }
      </div>
    )
  }
}

export default App;
