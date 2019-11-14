import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost"
import "./App.css";

function App() {
    return (
        <Router>
          <h1>hello</h1>
            <Route exact path="/" component={BlogList} />
            <Route path="/blogs/:blog_id" component={BlogPost} /> 
        </Router>
    );
}

export default App;
