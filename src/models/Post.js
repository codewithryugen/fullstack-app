import mongoose from "mongoose";

const { Schema } = mongoose;

let Post;

if (mongoose.models.Post) {
  Post = mongoose.model("Post");
} else {
  const postSchema = new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );

  Post = mongoose.model("Post", postSchema);
}

export default Post;
