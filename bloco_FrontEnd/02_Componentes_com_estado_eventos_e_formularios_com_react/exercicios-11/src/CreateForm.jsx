import React from 'react';
import GenInputEmail from './GenInputEmail';
import GenInputName from './GenInputName';
import GenSelector from './GenSelector';
import GenTextArea from './GenTextArea';

class CreateForm extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
      depoimento: '',
      lingProg: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <form id="formTest">
        <h1>Formulário de Testes</h1>
        <GenInputName handleChange={this.handleChange} contState={this.state.nome} />
        <GenInputEmail handleChange={this.handleChange} stateMail={this.state.email} />
        <GenSelector handleChange={this.handleChange} statelingProg ={this.state.lingProg} />
        <GenTextArea handleChange={this.handleChange} stateDepoimento={this.state.depoimento} />        
      </form>
    );
  }
}

export default CreateForm
