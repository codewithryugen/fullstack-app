import mongoose from "mongoose";

const { Schema } = mongoose;
let User;

if(mongoose.model.User){
    User = mongoose.model('User');
}else{
    const userSchema = new Schema(
    {
        name: {
        type: String,
        unique: true,
        required: true,
        },
        email: {
        type: String,
        unique: true,
        required: true,
        },
        password: {
        type: String,
        required: true,
        },
    },
    { timestamps: true }
    );
    User =  mongoose.model("User", userSchema);
}

export default User;