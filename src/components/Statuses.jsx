import React from 'react';

class Statuses extends React.Component {
    constructor() {
        super()
    }

    render() {    
        return (
            <h1>Current state is {this.props.state.status + ' as ' + this.props.state.value}</h1>
        );
    }
}

export default Statuses;