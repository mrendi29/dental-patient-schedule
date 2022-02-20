import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

/***
 * Implement later for auth

    componentDidMount(){

    }
    
    componentDidUpdate(){

    }    
*/

    onChange = (event) => this.setState({ [event.target.id]: event.target.value }, () => {})

    onSubmit = (event) => {
        // Prevent default page refresh
        event.preventDefault()

        const userData = {
            username: this.state.username,
            password: this.state.password
        }

        let { username, password } = userData;

        // call login authtencator here

    }

    render(){
        let { username, password } = this.state
        return(
            <div className='base-container'>
                <div className='container'>
                    <div className='header'>Login</div>

                    <div className='content'>
                        <div className='form'>
                            <form onSubmit={this.onSubmit}>
                                <div className='form-group'>
                                    <label htmlFor="username">Username:</label>
                                    <input type='text'
                                        placeholder='Username'
                                        id='username'
                                        className='text-input'
                                        onChange={this.onChange}
                                        value={username}
                                    />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor="password">Password:</label>
                                    <input type='text'
                                        placeholder='Password'
                                        id='password'
                                        className='text-input'
                                        onChange={this.onChange}
                                        value={password}
                                    />
                                </div>

                                <input type="submit" className='btn' value='Log In' />

                                <div className='text-center'>
                                    Don't have an account yet? 
                                    <Link className='redirect' to='/register'>
                                        Register here
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;