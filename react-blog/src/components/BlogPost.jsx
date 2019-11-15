import React, { Component } from "react";
import { loadData } from "../utils/loadData";

export class BlogPost extends Component {
    state = {
        blog: "Loading Data",
        editMode: false
    };

    async componentDidMount() {
        const id = this.props.match.params.blog_id;
        this.getBlogPost(id);
    }

    getBlogPost = async id => {
        const blog = await loadData(`/blogs/${id}`);

        this.setState({ blog });
    };

    handleEdit = () => {
        const editMode = !this.state.editMode;
        this.setState({
            editMode
        });
    };

    handleSubmit = async event => {
        event.preventDefault();
        const data = new FormData(event.target);

        const body = JSON.stringify({
            title: data.get("title"),
            preview: data.get("preview"),
            content: data.get("content")
        });

        const response = await fetch(`/blogs/${data.get("id")}`, {
            method: "PUT", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json"
            },
            body
        }).then(() => {
            const editMode = !this.state.editMode;
            this.setState({
                editMode
            });
            this.getBlogPost(data.get('id'))
            return response.json()
        });
    };

    render() {
        const { blog, editMode } = this.state;

        if (editMode) {
            return (
                <>
                    <h1>You are in edit mode</h1>
                    <form onSubmit={event => this.handleSubmit(event)}>
                        <input type="hidden" name="id" value={blog.id}></input>
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            defaultValue={blog.title}
                        ></input>
                        <input
                            type="text"
                            name="preview"
                            placeholder="Preview"
                            defaultValue={blog.preview}
                        ></input>
                        <input
                            type="text"
                            name="content"
                            placeholder="Content"
                            defaultValue={blog.content}
                        ></input>
                        <button type="submit">Save</button>
                    </form>
                </>
            );
        } else {
            return (
                <>
                    <a href="/">
                        <p>Go Back Home</p>
                    </a>
                    <div>
                        <h1>{blog.title}</h1>
                        <h3>Written by: {blog.author_id}</h3>
                        <p>{blog.content}</p>
                    </div>
                    <button onClick={() => this.handleEdit()}>Edit</button>
                </>
            );
        }
    }
}

export default BlogPost;
