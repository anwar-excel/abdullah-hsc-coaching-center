import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';
import './Courses.css';


const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div>

            <h2>Courses:{courses.length}</h2>
            <div className="course-container">
                {
                    courses.map(course => <Course
                        course={course}
                    ></Course>)
                }

            </div>

        </div>
    );
};

export default Courses;