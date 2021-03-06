import mongoose from "mongoose";
import User from "./User";

const PostSchema = new mongoose.Schema({
    image_path: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    summary: {
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
        ref: User
    }
}, 
{ 
    versionKey: false,
    timestamps: true,
    toJSON: { 
        transform(doc: any, ret: any) {
            ret.id = ret._id;
            delete ret._id;
        } 
    } 
});

const Post = mongoose.model("Post", PostSchema);

export default Post;