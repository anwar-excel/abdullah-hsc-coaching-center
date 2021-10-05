


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
                        to="/courses" activeStyle={{ fontWeight: "bold", color: "blue" }}>Courses
                    </NavLink>



                    <NavLink to="/contact-us" activeStyle={{ fontWeight: "bold", color: "blue" }}>
                        Contact Us
                    </NavLink>



                    <NavLink to="" activeStyle={{ fontWeight: "bold", color: "blue" }}>
                        About Us
                    </NavLink>



                </div>
            </div>
        </div>






    );
};

export default Header;