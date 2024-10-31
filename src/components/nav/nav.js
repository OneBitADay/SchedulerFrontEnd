import React from "react";
import logo from '../../resources/navResources/company_logo.png';
import './nav.css'

function Nav() {
    return (
        <div>
            <nav className='navbar'>
                <ul className='nav--items--partone'>
                    <li>Events</li>
                    <li>Event Planning</li>
                </ul>
                <img src={logo} alt='logo sign from company.' className='nav--logo'/>
                <ul className='nav--items--parttwo'>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav