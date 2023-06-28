import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    id: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    star: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    img: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Post ||
  mongoose.model('Post', postSchema, 'posts');
