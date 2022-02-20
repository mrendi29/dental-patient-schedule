import React, { Component } from 'react';

import { Link } from 'react-router-dom'


class Register extends Component {
    render(){
        return(
            <div className='base-container'>








                <Link className='redirect' to='/login'>
                    Login here
                </Link>
            </div>
        );
    }
}

export default Register;