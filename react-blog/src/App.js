import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost"
import CreateBlogPost from "./components/CreateBlogPost"
import "./App.css";

function App() {
    return (
        <Router>
            <Route exact path="/" component={BlogList} />
            <Route path="/blogs/:blog_id" component={BlogPost} /> 
            <Route path="/blogs/create" component={CreateBlogPost} /> 
        </Router>
    );
}

export default App;
