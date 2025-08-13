import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Learning Platform Dashboard</h1>
      <nav>
        <Link to="/courses">Courses</Link> |{' '}
        <Link to="/forum">Forum</Link> |{' '}
        <Link to="/admin">Admin</Link>
      </nav>
      <p>Welcome! Track your progress, join courses, and participate in the community.</p>
    </div>
  );
}

export default Dashboard;