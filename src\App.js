import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Students from './components/Students';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('/api/students')
      .then(response => response.json())
      .then(data => setStudents(data));
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Student Management System
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/students">
                Students
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/students" exact component={() => <Students students={students} />} />
        <Route path="/add-student" exact component={AddStudent} />
        <Route path="/edit-student/:id" exact component={EditStudent} />
      </Switch>
    </div>
  );
}

export default App;