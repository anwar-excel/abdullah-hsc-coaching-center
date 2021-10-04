import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <div>
            <h2>This header</h2>
            <NavLink
                to="/home"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="/courses"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
            >
                Courses
            </NavLink>
            <NavLink
                to="/books"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
            >
                Books
            </NavLink>
            <NavLink
                to="/profile"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
            >
                Profile
            </NavLink>
            <NavLink
                to="/english-club"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
            >
                English Club
            </NavLink>
            <NavLink
                to="/contact-us"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
            >
                Contact Us
            </NavLink>
            <NavLink
                to="/log-in"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
            >
                Login
            </NavLink>
            <NavLink
                to="/resister"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
            >
                Resister
            </NavLink>
        </div>
    );
};

export default Header;