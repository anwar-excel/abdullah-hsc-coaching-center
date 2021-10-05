import React from 'react';
import image from '../image/banner_error_404.jpg';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notfound">

            <img src={image} alt="" />
        </div>
    );
};

export default NotFound;