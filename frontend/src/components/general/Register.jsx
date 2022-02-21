import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class Register extends Component {
    constructor(){
        super()
        this.state = {
            fullName: '',
            username: '',
            email: '',
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
            fullName: this.state.fullName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        // later on for registering the user
        //this.props.registerUser(userData, this.props.history);

    }

    render(){
        let { fullName, username, email, password } = this.state;
        return(
            <div className='base-container'>
                <div className='container'>
                    <div className='header'>Register</div>

                    <div className='content'>
                        <div className='form'>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="full name">Full Name:</label>
                                    <input type = 'text'
                                    placeholder='Name'
                                    id='fullName'
                                    onChange={this.onChange}
                                    value={fullName}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="username">Username:</label>
                                    <input type = 'text'
                                    placeholder='Username'
                                    id='username'
                                    onChange={this.onChange}
                                    value={username}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type = 'text'
                                    placeholder='Email'
                                    id='email'
                                    onChange={this.onChange}
                                    value={email}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Password:</label>
                                    <input type = 'password'
                                    placeholder='Password'
                                    id='password'
                                    onChange={this.onChange}
                                    value={password}
                                    />
                                </div>

                                <input type='submit' className='btn' value='Register'/>

                                <div className='text-center'>
                                    Already have an account? 
                                    <Link className='redirect' to='/login'>
                                        Login here
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

export default Register;