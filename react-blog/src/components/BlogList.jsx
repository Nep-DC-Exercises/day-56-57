import React, { Component } from "react";
import { loadData } from "../utils/loadData";
export default class BlogList extends Component {
    state = {
        posts: []
    };

    async componentDidMount() {
        const response = await loadData(`/blogs`);
        const posts = response;

        this.setState({
            posts
        });
    }

    handleDelete = id => {
        let currentPosts = [...this.state.posts];
        return fetch(`/blogs/${id}`, {
            method: "delete"
        }).then(() => {
            let updatedPosts = currentPosts.filter(post => post.id !== id);
            this.setState({ posts: updatedPosts });
        });
    };

    render() {
        const { posts } = this.state;
        if (!posts) {
            return <h1>I'm loading my guy</h1>;
        } else {
            return (
                <>
                    <div>
                        <ul>
                            {posts.map(post => (
                                <li key={post.id}>
                                    <h3>{post.title}</h3>
                                    <p>Written by: {post.author_id}</p>
                                    <p>{post.date}</p>
                                    <p>{post.preview}</p>
                                    <button>
                                        <a href={`/blogs/${post.id}`}>
                                            Read More
                                        </a>
                                    </button>
                                    <button
                                        onClick={() =>
                                            this.handleDelete(post.id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <button>
                            <a href={`/blogs/create`}>CREATE A NEW
                            POST!</a>
                        </button>
                    </div>
                </>
            );
        }
    }
}
