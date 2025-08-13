import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Courses() {
  const [courses, setCourses] = useState([
    { _id: '1', title: 'React Basics', description: 'Learn React fundamentals.' },
    { _id: '2', title: 'Node.js Essentials', description: 'Backend with Node.js.' },
  ]);
  // Replace above with API fetch in real app

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course._id}>
            <Link to={`/courses/${course._id}`}>{course.title}</Link> - {course.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;