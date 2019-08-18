import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Import components from separate js files
import ViewTodo from "./components/view-todo.component";
import EditTodo from "./components/edit-todo.component";
import CreateTodo from "./components/create-todo.component";
import DeleteTodo from "./components/delete-todo.component";
import Home from "./components/home.component"

function App() {
  return (
    <Router>
      <div className="container">
        
        {/* Creates navigation bar for accessing components */}
        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand">Home</Link>
            </div>
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
              <Link to="/view" className="nav-link">View</Link>
              </li>
              <li className="navbar-item">
              <Link to="/create" className="nav-link">Create</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* When user navigates to / the viewtodo component is rendered */}
        <Route path="/" exact component={Home} />

        {/* When user navigates to / the viewtodo component is rendered */}
        <Route path="/view/" exact component={ViewTodo} />

        {/* When user navigates to /edit/:id the edittodo component is rendered for that id */}
        <Route path="/edit/:id" component={EditTodo} />

        {/* When user navigates to /delete/:id the deletetodo component is rendered for that id */}
        <Route path="/delete/:id" component={DeleteTodo} />

        {/* When user navigates to /create the createtodo component is rendered */}
        <Route path="/create/" exact component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;
