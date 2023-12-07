const mongoose = require("mongoose");
const review = new mongoose.Schema({
  movieId: Number,
  author: String,
  profilePicture: String,
  text: String,
  _id: false,
});
const movie = new mongoose.Schema({
  movieId: Number,
  release_date: Date,
  title: String,
  poster_path: String,
  backdrop_path: String,
  overview: String,
  genre_ids: [Number],
  _id: false,
});

const list = new mongoose.Schema({
  name: String,
  backgroundImg: String,
  listImg: String,
  movies: [movie],
  _id: false,
});
const userSchema = new mongoose.Schema({
  userId: Number,
  reviews: [review],
  lists: [list],
});

module.export = mongoose.model("User", userSchema);
