const express = require("express"),
    router = express.Router();

const blogs = require("../models/blogListModel");

router.get("/", async (req, res, next) => {
    const allBlogs = await blogs.getAll();
    res.json(allBlogs).status(200);
});

// localhost:4444/blogs/1
router.get("/:id", async (req, res, next) => {
    const { id } = req.params;
    const oneBlogPost = await blogs.getPostById(id);
    res.json(oneBlogPost).status(200);
});

router.delete("/:id", async (req, res, next) => {
    const { id } = req.params;
    const oneBlogPost = await blogs.deleteBlogPostById(id);
    res.json({
        message: "Blog post deleted successfully!"
    });
});

router.post("/", async (req, res, next) => {
    const { title, preview, content } = req.body;
    const oneBlogPost = blogs.createBlogPost(title, preview, content);

    res.json({
        message: "Blog post created."
    });
});

module.exports = router;
