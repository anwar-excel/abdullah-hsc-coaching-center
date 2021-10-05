import React from 'react';

const Course = (props) => {
    const { subject, img, teacherName, study, duration, classTime } = props.course;
    const courseStyle = {
        border: '3px solid goldenrod',
        padding: '10px',
        paddingTop: '10px',
        borderRadius: '10px',
        margin: '10px'
    }
    return (
        <div style={courseStyle}>

            <img style={{ height: '200px', width: '200px', margin: '0 auto' }} src={img} alt="" />
            <h4>Subject name:{subject}</h4>
            <p>Teacher {teacherName}</p>
            <h6>Teachers Study:{study}</h6>
            <h6>Class Time{classTime}</h6>
            <p>Class Duration:{duration}</p>

        </div>
    );
};

export default Course;