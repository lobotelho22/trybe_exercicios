import React from "react";

class GenSelector extends React.Component {
  render() {
    const { handleChange, statelingProg } = this.props
    return (
      <>
        <label htmlFor="lingProg">Escolha sua linguagem de programação preferida: </label>
        <select 
          name="lingProg"
          id="lingProg"
          form="formTest"
          onChange={handleChange}
          value={statelingProg}>
          <option value="none"></option>
          <option value="c">C</option>
          <option value="go">Go</option>
          <option value="javaScript">JavaScript</option>
          <option value="python">Python</option>
        
        </select>
      </>)
  }
}

export default GenSelector