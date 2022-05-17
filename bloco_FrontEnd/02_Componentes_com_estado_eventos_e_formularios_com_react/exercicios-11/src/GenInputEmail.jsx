import React from 'react';

class GenInputEmail extends React.Component {
  render() {
    const { handleChange, stateMail } = this.props;
    return (<><label htmlFor="email">e-mail: </label>
      <input type="email" id="email" name="email" value={ stateMail } onChange={ handleChange} /></>);
  }
};

export default GenInputEmail
