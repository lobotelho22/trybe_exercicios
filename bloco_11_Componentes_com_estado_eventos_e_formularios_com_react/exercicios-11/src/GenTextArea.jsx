import React from "react";

class GenTextArea extends React.Component {
  render() {
    const { stateDepoimento, handleChange } = this.props
    return (
      <>
      <label htmlFor='depoimento'>
        Deixe seu comentário:
      </label>
      <textarea
        id="depoimento"
        name="depoimento"
        rows="4"
        cols="30"
        value={stateDepoimento}
        onChange={handleChange}
      >Vamo que vamo!
      </textarea>
    </>)
  }
}

export default GenTextArea
