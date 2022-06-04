import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
    }
    this.handleInput = this.handleInput.bind(this); 
  }

  handleInput(event) {
    const { name, value } = event.target;
    console.log(event.target);
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { nome, email } = this.state;
    return(
      <div>
        <h1>Teste de Inputs</h1>
        <p>
          <label htmlFor="nome">
            Nome:
            <input
              type="text"
              id="nome"
              name="nome"
              value={ nome }
              onChange={ this.handleInput }
            />
          </label>
        </p>
        <p>
          <label htmlFor="email">
            Email:
            <input type="text" id="email" name="email" value={email} onChange={this.handleInput} />
          </label>
        </p>
      </div>
    )
  }
}

export default App;
