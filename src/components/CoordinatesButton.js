// Code CoordinatesButton Component Here

import React from 'react'

class CoordinatesButton extends React.Component {

    handleClick = (e) => {
        let coords = []
        coords.push(e.clientX)
        coords.push(e.clientY)
        this.props.onReceiveCoordinates(coords)
    }
    render() {
        return(
            <button onClick={this.handleClick}>Coords Button</button>
        )
    }
}

export default CoordinatesButton