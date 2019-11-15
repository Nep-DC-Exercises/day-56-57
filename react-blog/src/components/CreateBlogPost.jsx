import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
export default class CreateBlogPost extends Component {

    state = {
        blog: "Loading Data"
    }

    renderRedirect = () => {
        return <Redirect to='/' />
    }
    handleSubmit = async event => {
        event.preventDefault();
        const data = new FormData(event.target);

        const body = JSON.stringify({
            title: data.get("title"),
            preview: data.get("preview"),
            content: data.get("content")
        });

        const response = await fetch(`/blogs`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json"
            },
            body
        })

        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <h1>You are in create mode </h1>
                    <form onSubmit={event => this.handleSubmit(event)} action="/">
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                        ></input>
                        <input
                            type="text"
                            name="preview"
                            placeholder="Preview"
                        ></input>
                        <input
                            type="text"
                            name="content"
                            placeholder="Content"
                        ></input>
                        <button type="submit">Save</button>
                    </form>
            </div>
        )
    }
}
