import React, { Component } from "react";
import { loadData } from "../utils/loadData";
// hladf;laskdfj
export default class BlogList extends Component {
    state = {
        posts: []
    };

    async componentDidMount() {
        const response = await loadData(`/blogs`);
        const posts = response;
        console.log(posts)

        this.setState({
            posts
        });
    }

    render() {
        const { posts } = this.state;
        return (
            <div>
                <ul>
                {posts.map(post => (
                
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>Written by: {post.author_id}</p>
                        <p>{post.date}</p>
                        <p>{post.preview}</p>
                        <a href={`/blogs/${post.id}`}>Read More</a>
                    </li>
                ))}
                </ul>
            </div>
        );
    }
}