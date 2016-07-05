import React from 'react';
import Form from './Form.jsx';

class Auth extends React.Component {
    constructor() {
        super()
    }

    render() {    
        return (
            <div>
                <Form state={this.props.state} />
                
            </div>
        );
    }
}

export default Auth;