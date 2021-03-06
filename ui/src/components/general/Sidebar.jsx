import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    }

    return(
        <div className={active?"sidebar active":"sidebar"}>
            <div class="logo">
                <i class='bx bxs-capsule'></i>
                <div class="logo_name">DPS</div>
            </div>

            <button className="menu" onClick={handleClick}>
                <i id='btn' class='bx bx-menu'></i>
            </button>
            
            <ul class="nav_list">
                <li>
                    <button onClick={handleClick}>
                        <i class='bx bx-search-alt' ></i>
                    </button>
                    <input type="text" placeholder="Search..."></input>
                    <span class="tooltip">Search</span>
                </li>
                <li>
                    <a href="/dashboard">
                        <i class='bx bxs-dashboard' ></i>
                        <span class="links_name">Dashboard</span>
                    </a>
                    <span class="tooltip">Dashboard</span>
                </li>
                <li>
                    <a href="/notifications">
                        <i class='bx bx-chat'></i>
                        <span class="links_name">Notifications</span>
                    </a>
                    <span class="tooltip">Notifications</span>
                </li>
                <li>
                    <a href="/calandar">
                    <i class='bx bx-calendar' ></i>
                        <span class="links_name">Calendar</span>
                    </a>
                    <span class="tooltip">Calendar</span>
                </li>
                <li>
                    <a href="/setting">
                        <i class='bx bx-cog'></i>
                        <span class="links_name">Settings</span>
                    </a>
                    <span class="tooltip">Settings</span>
                </li>
            </ul>
            <a href="/">
                <div class='logout'>
                    <i class='bx bx-log-out'></i>
                </div>
            </a>
        </div>
    );
}

export default Sidebar;