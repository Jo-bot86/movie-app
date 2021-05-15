import mongoose from 'mongoose';

//creating a mongoose schema
const postSchema = mongoose.Schema({
  title: String,
  rating: {
    type: Number,
    default: 0
  },
  genre: String,
  year: String,
  // string of an image
  selectedFile: String,
});

// now we turn the schema into a model
const PostMessage = mongoose.model('PostMessage', postSchema);

// exporting a mongoose model where we can run 
// commands like Create, Read/Find, Update and Delete (CRUD form)
export default PostMessage;