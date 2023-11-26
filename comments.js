// Create web server
// 1. Create an Express web server
// 2. Create a GET route for /comments that returns the full list of comments
// 3. Create a POST route for /comments that adds a new comment to the list of comments
// 4. Create a DELETE route for /comments that removes a comment from the list of comments
// 5. Create a PUT route for /comments that modifies an existing comment in the list of comments
// 6. Create a GET route for /comments/:id that returns a single comment with the matching id (or returns 404)
// 7. Create a POST route for /comments/:id/upvote that adds one to the upvote count for a comment with the matching id (or returns 404)
// 8. Create a POST route for /comments/:id/downvote that subtracts one from the upvote count for a comment with the matching id (or returns 404)

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4001;

const comments = require('./data/comments');

// Use body-parser middleware
app.use(bodyParser.json());

// GET route for /comments that returns the full list of comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

// POST route for /comments that adds a new comment to the list of comments
app.post('/comments', (req, res) => {
    const newComment = req.body;
    if (newComment) {
        comments.push(newComment);
        res.send(newComment);
    } else {
        res.status(400).send();
    }
});

// DELETE route for /comments that removes a comment from the list of comments
app.delete('/comments/:commentId', (req, res) => {
    const commentId = req.params.commentId;
    const indexToDelete = comments.findIndex(comment => comment.id === parseInt(commentId));
    if (indexToDelete !== -1) {
        comments.splice(indexToDelete, 1);
        res.status(204).send();
    } else {
        res.status(404).send();
    }
});

// PUT route for /comments that modifies an existing comment in the list of comments
app.put('/comments/:commentId', (req, res) => {
    const commentId = req.params.commentId;
    const indexToChange = comments.findIndex(comment