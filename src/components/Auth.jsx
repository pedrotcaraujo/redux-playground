import React from 'react';
import Form from './Form.jsx';
import Statuses from './Statuses.jsx';

class Auth extends React.Component {
    constructor() {
        super()
    }

    render() {    
        return (
            <div>
                <Form state={this.props.state} />
                <Statuses state={this.props.state} />                 
            </div>
        );
    }
}

export default Auth;