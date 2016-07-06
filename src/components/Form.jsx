import React from 'react';
import {store} from '../store';

class Form extends React.Component {
    constructor() {
        super()
    }

    handleLogin() {
        let username = this.refs.username.value;
        store.dispatch({
            type: 'LOGIN',
            value: username
        });
    }

    handleLogout() {
        store.dispatch({
            type: 'LOGOUT',
            value: 'guest'
        });
        this.refs.username.value = '';
    }

    render() {
        let button;
        if(this.props.state.status === 'logged in') {
            button = <button onClick={this.handleLogout.bind(this)}>Log out</button>;  
        } else {
            button = <input type="button" value="Login" onClick={this.handleLogin.bind(this)} />
        };
    
        return (
            <div>
                <input type="text" ref="username" />
                {button} 
            </div>
        );
    }
}

export default Form;