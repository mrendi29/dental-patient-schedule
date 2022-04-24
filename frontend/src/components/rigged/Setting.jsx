import React, { Component, } from 'react';

import Sidebar from "../general/Sidebar";


class Setting extends Component {
    constructor(){
        super()
        this.state = {
            password: '',
            newPassword: '',
            confirmPassword: ''
        }
    }

    onChange = (event) => this.setState({ [event.target.id]: event.target.value }, () => {})

    onSubmit = (event) => {
        // Prevent default page refresh
        event.preventDefault()

        const userData = {
            password: this.state.password,
            newPassword: this.state.newPassword,
            confirmPassword: this.state.confirmPassword
        }

        let { password, newPassword, confirmPassword } = userData;
    }

    render(){
        let { password, newPassword, confirmPassword } = this.state

        return(
            <div className="wrapper">
                <Sidebar/>
                <div class="base">
                    <div class="text">Account Settings</div>
                    <div class='setting'>
                        <div class="left">
                            <div class="setting-title">
                                Change Password
                            </div>
                            <div class="setting-description">
                                Strong password recommended. Enter 8-256 characters. Do not include common words or names. Combine uppercase letters, lowercase letters, numbers, and symbols.
                            </div>
                            <form onSubmit={this.onSubmit}>
                                <div class="input-field">
                                    <input class="pswrd"
                                        type="password"
                                        id='password'
                                        required
                                        onChange={this.onChange}
                                        value={password}
                                    />
                                    <label>Old Password</label>
                                </div>
                                <div class="input-field">
                                    <input class="pswrd"
                                        type="password"
                                        id='newPassword'
                                        required
                                        onChange={this.onChange}
                                        value={newPassword}
                                    />
                                    <label>New Password</label>
                                </div>
                                <div class="input-field">
                                    <input class="pswrd"
                                        type="password"
                                        id='confirmPassword'
                                        required
                                        onChange={this.onChange}
                                        value={confirmPassword}
                                    />
                                    <label>Confirm Password</label>
                                </div>
                                <input class='btn' type="submit" value='submit' />
                            </form>
                        </div>
                        <div/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Setting;