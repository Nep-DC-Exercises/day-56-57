const db = require("./conn");
// May need to join the users table to get access to the author's username. Punting this down the line.
class blogs {
    constructor(id, authorId, title, preview, content) {
        this.id = id;
        this.authorId = authorId;
        this.title = title;
        this.preview = preview;
        this.content = content;
    }

    static async getAll() {
        try {
            const response = await db.query(`SELECT * FROM blogposts;`);
            return response;
        } catch (err) {
            return err.message;
        }
    }

    static async getPostById(blogId) {
        try {
            const response = await db.one(
                `SELECT * FROM blogposts WHERE id=$1`,
                [blogId]
            );
            return response;
        } catch (err) {
            return err.message;
        }
    }

    static async deleteBlogPostById(blogId) {
        try {
            const response = await db.one(
                `DELETE FROM blogposts WHERE id=$1`,
                [blogId]
            );
            return response;
        } catch (err) {
            return err.message;
        }
    }

    static async createBlogPost() {
        try {
            const response = await db.one(
                `DELETE FROM blogposts WHERE id=$1`,
                [blogId]
            );
            return response;
        } catch (err) {
            return err.message;
        }
    }
}

module.exports = blogs;
