import mongoose from "mongoose";
import { UserRole } from "../enums/UserRole";
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
    },
    role: {
        type: String,
        required: true,
        enum: Object.values(UserRole),
        default: UserRole.MODERATOR
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

UserSchema.pre("save", async function(done) {
    // Before saving user, hashing the given password
    const hashed_password = await Password.hash(this.get("password"));
    this.set("password", hashed_password);
});

const User = mongoose.model("User", UserSchema);

export default User;