// // controllers/posts.js

// const Post = require("../modals/Post")


// exports.getPosts = async (req, res) => {
//     try {
//         const posts = await Post.find();
//         res.json(posts);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };

// exports.createPost = async (req, res) => {
//     const {  image, accountTitle, accountNumber, email, password } = req.body;
//     console.log( "Title: ", accountTitle );
//     // console.log( "Content: ", content );
//     const post = new Post({
    
//         image,
//         accountTitle,
//         accountNumber,
//         email,
//         password
//     });

//     try {
//         const newPost = await post.save();
//         res.status(201).json(newPost);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// };

// exports.updatePost = async (req, res) => {
//     const {  image, accountTitle, accountNumber, email, password } = req.body;

//     try {
//         const post = await Post.findByIdAndUpdate(
//             req.params.id,
//             {  image, accountTitle, accountNumber, email, password },
//             { new: true }
//         );
//         if (!post) return res.status(404).json({ message: 'Post not found' });
//         res.json(post);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// };

// exports.deletePost = async (req, res) => {
//     try {
//         const post = await Post.findByIdAndDelete(req.params.id);
//         if (!post) return res.status(404).json({ message: 'Post not found' });
//         res.json({ message: 'Post deleted successfully' });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// controllers/postController.js
const Post = require('../modals/Post');

exports.createPost = async (req, res) => {
    const { image, accountTitle, accountNumber, email, password } = req.body;
    const post = new Post({
        image,
        accountTitle,
        accountNumber,
        email,
        password
    });
    try {
        const newPost = await post.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.updatePost = async (req, res) => {
    try {
        console.log("Update post request received for ID:", req.params.id);
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!post) {
            console.log("Post not found for ID:", req.params.id);
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(post);
    } catch (err) {
        console.error("Error updating post:", err);
        res.status(400).json({ message: err.message });
    }
};

exports.deletePost = async (req, res) => {
    try {
        console.log("Delete post request received for ID:", req.params.id);
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) {
            console.log("Post not found for ID:", req.params.id);
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json({ message: 'Post deleted' });
    } catch (err) {
        console.error("Error deleting post:", err);
        res.status(500).json({ message: err.message });
    }
};

// exports.updatePost = async (req, res) => {
//     try {
//         const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!post) {
//             return res.status(404).json({ message: 'Post not found' });
//         }
//         res.json(post);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// };

// exports.deletePost = async (req, res) => {
//     try {
//         const post = await Post.findByIdAndDelete(req.params.id);
//         if (!post) {
//             return res.status(404).json({ message: 'Post not found' });
//         }
//         res.json({ message: 'Post deleted' });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };

