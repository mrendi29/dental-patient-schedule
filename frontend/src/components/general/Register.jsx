import React, { Component } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
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

    

    handleClick = () => {
        const navigate = useNavigate();
        navigate('/login');
    }

    render(){
        let { fullName, username, email, password } = this.state;
        return(
            <body>
                <div className='container'>
                    <header>Register</header>
                    <form onSubmit={this.onSubmit}>
                        <div class="input-field">
                            <input type="text"
                                required
                                id='fullName'
                                onChange={this.onChange}
                                value={fullName}
                            />
                            <label>Full Name</label>
                        </div>
                        <div class="input-field">
                            <input type="text"
                                required
                                id='username'
                                onChange={this.onChange}
                                value={username}
                            />
                            <label>Username</label>
                        </div>
                        <div class="input-field">
                            <input type="text"
                                required
                                id='email'
                                onChange={this.onChange}
                                value={email}
                            />
                            <label>Email</label>
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
                            {/* <input type="submit" value='REGISTER' /> */}
                            <div className="rigged-reg">
                                <a href="/login">REGISTER</a>
                            </div>
                        </div>
                    </form>
                    <div class="signup">
                        Already a member? <a href="/login">Login now</a>
                    </div>
                </div>
            </body>
        );
    }
}

export default Register;