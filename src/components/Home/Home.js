import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';


const Home = () => {


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
                    courses.slice(0, 3).map(course => <Course
                        course={course}
                    ></Course>)
                }

            </div>

        </div>
    );
};

export default Home;