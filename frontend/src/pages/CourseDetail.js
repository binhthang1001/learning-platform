import React from 'react';
import { useParams } from 'react-router-dom';

function CourseDetail() {
  const { id } = useParams();
  // Fetch course & lessons by id
  const course = { title: 'React Basics', lessons: [
    { _id: 'a', title: 'Intro to React' },
    { _id: 'b', title: 'Components' },
  ]};

  return (
    <div>
      <h2>{course.title}</h2>
      <h3>Lessons</h3>
      <ul>
        {course.lessons.map(lesson => (
          <li key={lesson._id}>{lesson.title}</li>
        ))}
      </ul>
      <button>Take Quiz</button>
    </div>
  );
}

export default CourseDetail;