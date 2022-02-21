import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Landing extends Component {
    render(){
        return(
            <div className='base-container'>
                <div className='header'>
                    This is the landing page, you can
                    <Link className='redirect' to='/register'>
                        register
                    </Link>
                    or
                    <Link className='redirect' to='/login'>
                        login
                    </Link>
                </div>
            </div>
        );
    }
}

export default Landing;