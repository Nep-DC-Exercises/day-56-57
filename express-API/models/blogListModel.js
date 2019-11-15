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
                `SELECT * FROM blogposts WHERE id=$1;`,
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
                `DELETE FROM blogposts WHERE id=$1;`,
                [blogId]
            );
            return response;
        } catch (err) {
            return err.message;
        }
    }

    static async createBlogPost(title, preview, content) {
        try {
            const response = await db.one(
                `INSERT INTO blogposts (author_id, title, preview, content)
                VALUES(1, $1, $2, $3);`,
                [title, preview, content]
            );
            return response;
        } catch (err) {
            return err.message;
        }
    }

    static async updatePostById(title, preview, content, blogId) {
        try {
            const response = await db.one(
                `UPDATE blogposts SET title=$1,preview=$2,content=$3 WHERE id=$4;`,
                [title, preview, content, blogId]
            );
            return response;
        } catch (err) {
            return err.message;
        }
    }
}

module.exports = blogs;


// UPDATE "public"."blogposts"

// SET "date"='DEFAULT', "title"='Actually this is a change', "preview"='Changing!', "content"='THE CONTENT HAS CHANGED MY GUY!' 
// WHERE "id"=1 

// RETURNING "id", "author_id", "date", "title", "preview", "content";
