const express = require("express"),
    router = express.Router();

const blogs = require("../models/blogList");

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

module.exports = router;
