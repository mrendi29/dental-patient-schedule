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
        console.log('redirecting')

        //this.props.history.push('/');

    }

    

    render(){
        let { username, password } = this.state

        return(
            <body>
                <div className='container'>
                    <header>Login</header>
                    <form onSubmit={this.onSubmit}>
                        <div class="input-field">
                            <input type="text"
                                required
                                id='username'
                                onChange={this.onChange}
                                value={username}
                            />
                            <label>Email or Username</label>
                        </div>
                        <div class="input-field">
                            <input class="pswrd"
                                type="password"
                                id='password'
                                required
                                onChange={this.onChange}
                                value={password}
                            />
                            <label>Password</label>
                        </div>
                        <div class="button">
                            <div class="inner"></div>
                            {/* <input type="submit" value='LOGIN' /> */}
                            <div className="rigged-reg">
                                <a href="/dashboard">LOGIN</a>
                            </div>
                        </div>
                    </form>
                    <div class="signup">
                        Not a member? <a href="/register">Signup now</a>
                    </div>
                    <div class="rigged">
                        Doctor login <a href="/login">Here</a>
                    </div>
                </div>
            </body>
        );
    }
}

export default Login;