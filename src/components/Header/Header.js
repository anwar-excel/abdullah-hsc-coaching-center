


import { Link } from 'react-router-dom';
import Courses from '../Courses/Courses';

import './Header.css'

const Header = () => {


    return (

        <div className="home">


            <Link to="/home">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/contact-us">Contact us</Link>


        </div>



    );
};

export default Header;