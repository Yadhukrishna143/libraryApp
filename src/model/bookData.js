"use strict";

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/library");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  author: String,
  genre: String,
  image: String,
});

const bookData = mongoose.model("bookdata", BookSchema);
module.exports = bookData;
