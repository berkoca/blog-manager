import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    image_url: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    category_tags: [String],
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    }
}, { versionKey: false });

const Post = mongoose.model("Post", PostSchema);

export default Post;