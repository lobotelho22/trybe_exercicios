import React from 'react';

class GenInputName extends React.Component {
  render() {
    const { handleChange, contState } = this.props
    return (
      <>
        <label
          htmlFor='nome'>
          Nome Completo:
        </label>

        <input
          type="text"
          id="nome"
          name="nome"
          value={ contState }
          onChange={ handleChange }
        />
      </>
    );
  }
}

export default GenInputName
