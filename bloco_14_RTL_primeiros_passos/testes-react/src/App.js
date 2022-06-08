// import logo from './logo.svg';
import React from 'react';
import ValidEmail from './components/ValidEmail';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      saveEmail: '',
      arrayImg: '',
    }
  }

  async componentDidMount() {
    const url = 'https://dog.ceo/api/breed/husky/images';
    const arrayImg = await fetch(url)
        .then((response) => response.json())
        .then((data) => data.message);
    this.setState({
      arrayImg,
    });
  }

  changeEmail = (value) => {
    this.setState(
      {
        email: value,
      }
    )
  }
  
  changeSaveEmail = (value) => {
    this.setState({
      saveEmail: value,
      email: '',
    })
  }

  render() {
    const { email, saveEmail, arrayImg } = this.state;
    const testArray = Array.isArray(arrayImg);
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
          <input
            id="id-email"
            type="email"
            onChange={ (e) => this.changeEmail(e.target.value) }
            value={ email }
          />
        </label>
        <input
          id="btn-send"
          type="button"
          data-testid="id-send"
          value="Enviar"
          onClick={ () => this.changeSaveEmail(email) }
          />
        <input id="btn-back" type="button" value="Voltar" />
        <ValidEmail email={ saveEmail } />
        {  testArray
            ? <div>
              <p>Doguinhos</p>
              { arrayImg.map((dogURL, index) => {
              return (
              <article key={`doguinho${index}`}>
                <img src={dogURL} alt="doguinho fofo" width="300px" />
              </article>
              )
            }) }</div>
            : <p>carregando...</p>
        }
      </div>
    );
  }
}

export default App;
