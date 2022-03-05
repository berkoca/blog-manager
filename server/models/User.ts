import mongoose from "mongoose";
import { Password } from "../library/Password";

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, 
{ 
    versionKey: false, 
    toJSON: { 
        transform(doc: any, ret: any) {
            ret.id = ret._id;
            delete ret._id;
        } 
    } 
});

UserSchema.pre("save", async function(done) {
    // Before saving user, hashing the given password
    const hashed_password = await Password.hash(this.get("password"));
    this.set("password", hashed_password);
});

const User = mongoose.model("User", UserSchema);

export default User;