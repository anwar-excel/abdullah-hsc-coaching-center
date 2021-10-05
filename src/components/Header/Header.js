


import { Link } from 'react-router-dom';
import Courses from '../Courses/Courses';
import { NavLink } from 'react-router-dom';

import './Header.css'

const Header = () => {


    return (

        <div className='row my-header'>
            <div className='col-md-3 css-header'>


            </div>
            <div className='col-md-9'>
                <div className='nav-bar'>
                    <NavLink to="/home" activeStyle={{ fontWeight: "bold", color: "green" }}>
                        Home
                    </NavLink>
                    <NavLink
                        to="/courses" activeStyle={{ fontWeight: "bold", color: "green" }}>Courses
                    </NavLink>



                    <NavLink to="/contact-us" activeStyle={{ fontWeight: "bold", color: "green" }}>
                        Contact Us
                    </NavLink>
                    <NavLink to="/goal" activeStyle={{ fontWeight: "bold", color: "green" }}>
                        Goal
                    </NavLink>

                </div>
            </div>
        </div>






    );
};

export default Header;