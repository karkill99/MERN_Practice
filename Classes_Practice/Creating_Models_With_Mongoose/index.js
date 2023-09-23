
// import statements
// const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

// config

// server init
// const server = express();
mongoose.Promise = global.Promise;
mongoose
  .connect(
    "mongodb+srv://kartikmm99:Kartik1234@cluster0.oaxuvof.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((data) => {
    console.log("MongoDB is Connected");
  })
  .catch((err) => console.log("Connection Error", err));

// Schema => Model => Document => Store In Database
// CRUD => Create - Read - Upadte - Delete
// Creating A Schema
const personSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  age: Number,
});

const Blog = mongoose.model("Blog", personSchema);

// CREATE
const person1 = new Blog({
  name: "kartik",
  age: 24,
});

person1
  .save()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// READ
Blog.find({})
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// UPDATE
Blog.updateOne(
  {
    age: 24,
  },
  { age: 25 }
)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// DELETE
Blog.deleteOne({
  age: 24,
})
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//server middleware

//server routes

//server start
// server.listen(8000, () => console.log("Server is Running On Port 8000"));
