import React from 'react';
// import PropTypes from 'prop-types';

class CreateButton extends React.Component {
    constructor() {
        super()
        this.state = {
            numberOfClicks: 0,
            color: "red"
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
        this.setState((prevState) => ({
            numberOfClicks: prevState.numberOfClicks + 1
        }))
        
        const testEven = this.state.numberOfClicks +1;
        if (testEven % 2 !== 0) {
            this.setState(() => ({
                color: "green"
            }))
        }

        if (testEven % 2 === 0) {
            this.setState(() => ({
                color: "red"
            }))
        }
    }

    render () {
        const colorVar = this.state.color;
        return <button onClick={this.handleClick} style={{backgroundColor: colorVar}}>{ this.state.numberOfClicks }</button>
    }
}

export default CreateButton;
