import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Landing extends Component {
    render(){
        return(
            <div className='base-container'>
                <div class="land-title">
                    Dental Patient & Schedule
                </div>
                <div class="summary">
                    Dental Patient & Schedule (DP&S) is born out of the mutual frustration of dentists and patients trying to schedule new appointments, reminding patients to attend these appointments and then managing their patient records. The business goal is to create an application platform that enables a seamless experience for the patient to view their records and schedule new appointments and also allows dentists to manage all their patients. 
                </div>
                <button class="redirect">
                    <a class="butt" href="/register">
                        <i class='bx bxs-capsule' id='button-logo'></i>
                        Get Started
                    </a>
                </button>
                {/* <div className='header'>
                    This is the landing page, you can
                    <Link className='redirect' to='/register'>
                        register
                    </Link>
                    or
                    <Link className='redirect' to='/login'>
                        login
                    </Link>
                </div> */}
            </div>
        );
    }
}

export default Landing;