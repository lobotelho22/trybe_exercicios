import React, { Component }from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    }
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        this.setState({characters: data.results})
      })
  }

  render() {
    const { characters } = this.state;

    const charactersList = characters.map(({ name, image }, index) => {
      if (index < 18) {
        return (
          <div className="container" key={name}>
            <h3>{ name }</h3>
            <img src={ image } alt={ name } />
          </div>
        );
      }
      return (<></>)
    });

    return (
      <div className="App">
        <h1>
          Rick and Morty Nine Characters:
        </h1>
        <div className="body">
          { charactersList }
        </div>
      </div>
    );
  }
}

export default App;
