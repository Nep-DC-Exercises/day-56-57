const express = require("express"),
    path = require("path"),
    cookieParser = require("cookie-parser"),
    logger = require("morgan");

// Todo: Install compression and helmet middleware

// Route/Controllers
const indexRouter = require("./routes/index"),
    blogRouter = require("./routes/blogListRoute");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/blogs", blogRouter);

module.exports = app;
