import React, { Component } from "react";
import { loadData } from "../utils/loadData";

export class BlogPost extends Component {
    state = {
        blog: "Loading Data"
    };

    async componentDidMount() {
        const id = this.props.match.params.blog_id;
        console.log(id);
        this.getBlogPost(id);
    }

    getBlogPost = async id => {
        const blog = await loadData(`/blogs/${id}`);

        this.setState({ blog });
    };

    render() {
        const blog = this.state.blog;

        if (this.state.issue === "Loading Data") {
            return <h1>Loading Data</h1>;
        } else {
            return (
                <>
                    <a href="/">
                        <p>Go Back Home</p>
                    </a>
                    <div>
                        <h1>{blog.title}</h1>
                        <h3>Written by: {blog.author_id}</h3>
                        <p>{blog.content}s</p>
                    </div>
                </>
            );
        }
    }
}

export default BlogPost;
