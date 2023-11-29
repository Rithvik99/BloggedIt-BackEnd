import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: { 
        type: Number,
        default:0
    },
    createdAt: { 
        type: Date,
        default: new Date()
    },
});

const BlogMessage = mongoose.model('BlogMessage', blogSchema);

export default BlogMessage;