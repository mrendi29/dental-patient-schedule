import React, { Component } from 'react';

class Dashboard extends Component {
    constructor(){
        super()
    }

    render(){

        return(
            <div class="wrapper">
                <div class="sidebar">
                    <div class="logo">
                        <i class='bx bxs-capsule'></i>
                        <div class="logo_name">Poopybutt</div>
                    </div>
                    <i id='btn' class='bx bx-menu'></i>
                    
                    <ul class="nav_list">
                        <li>
                            <i class='bx bx-search-alt' ></i>
                            <input type="text" placeholder="Search..."></input>
                            {/* <span class="tooltip">Dashboard</span> */}
                        </li>
                        <li>
                            <a href="#">
                                <i class='bx bxs-dashboard' ></i>
                                <span class="links_name">Dashboard</span>
                            </a>
                            {/* <span class="tooltip">Dashboard</span> */}
                        </li>
                        <li>
                            <a href="#">
                                <i class='bx bx-calendar-plus'></i>
                                <span class="links_name">Online Booking</span>
                            </a>
                            {/* <span class="tooltip">Online Booking</span> */}
                        </li>
                        <li>
                            <a href="#">
                                <i class='bx bx-chat'></i>
                                <span class="links_name">Messages</span>
                            </a>
                            {/* <span class="tooltip">Messages</span> */}
                        </li>
                        <li>
                            <a href="#">
                            <i class='bx bx-calendar' ></i>
                                <span class="links_name">Calendar</span>
                            </a>
                            {/* <span class="tooltip">Calendar</span> */}
                        </li>
                        <li>
                            <a href="#">
                                <i class='bx bx-cog'></i>
                                <span class="links_name">Settings</span>
                            </a>
                            {/* <span class="tooltip">Settings</span> */}
                        </li>
                    </ul>
                    <div class='logout'>
                        <i class='bx bx-log-out'></i>
                    </div>
                </div>
                <div class="dashboard">
                    <div class="text">Dashboard</div>
                </div>
            </div>
        );
    }
}

export default Dashboard;