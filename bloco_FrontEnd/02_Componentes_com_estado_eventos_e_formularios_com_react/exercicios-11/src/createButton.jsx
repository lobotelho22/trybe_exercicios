import React from 'react';
// import PropTypes from 'prop-types';

class CreateButton extends React.Component {
    constructor() {
        super()
        this.state = {
            numberOfClicks: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
        this.setState((prevState) => ({
            numberOfClicks: prevState.numberOfClicks + 1
        }))
    }
    render () {
        return <button onClick={this.handleClick}>{ this.state.numberOfClicks }</button>
    }
}

export default CreateButton;
