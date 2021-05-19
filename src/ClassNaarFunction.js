import React, {Component} from 'react'

class ClassNaarFunction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLightOn: true
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            isLightOn: !this.state.isLightOn,
        });
    }

    render() {
        return (
            <button
                type="button"
                onClick={this.handleClick}
            >
                {this.state.isLightOn ? 'AAN' : 'UIT'}
            </button>
        );
    }
}

export default ClassNaarFunction;