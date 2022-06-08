import React from 'react'

class Image extends React.Component {
        render() {
            const sourceA = this.props.source    
            return <img src={ sourceA } alt={this.props.alternativeText} />
        }
}

export default Image
