const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const todoRoutes = express.Router();
const Todo = require("./model/todo.model");
const PORT = process.env.PORT || 4000;

// Starts server and listens for requests on defined port
app.use(cors());
app.use(bodyParser.json());


// HEROKU DEPLOYMENT configuration ... other imports 
const path = require("path")

// HEROKU DEPLOYMENT configuration ... other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")))


// HEROKU DEPLOYMENT configuration ... before your app.listen(), add this:
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


// Establishes server routing
app.use("/todos", todoRoutes);

// Creates the endpoint for retrieving todos from the Mongo database
todoRoutes.route("/").get(function(req, res) {
  Todo.find(function(err, todos) {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

// Creates the endpoint for retrieving todo by id from the Mongo database
todoRoutes.route("/:id").get(function(req, res) {
  let id = req.params.id;

  Todo.findById(id, function(err, todo) {
    if (err) {
      console.log(err);
    } else {
      res.json(todo);
    }
  });
});

// Creates the endpoint for adding todo to the Mongo database
todoRoutes.route("/add").post(function(req, res) {
  let todo = new Todo(req.body);

  todo.save().then(todo => {
    res
      .status(200)
      .json({ todo: "todo added successfully" })
      .catch(err => {
        res.status(400).send("adding new todo failed");
      });
  });
});

// Creates the endpoint for updating todo by id from the Mongo database
todoRoutes.route("/update/:id").post(function(req, res) {
  Todo.findById(req.params.id, function(err, todo) {
    if (!todo) res.status(404).send("data is not found");
    else todo.todo_description = req.body.todo_description;
    todo.todo_responsible = req.body.todo_responsible;
    todo.todo_priority = req.body.todo_priority;
    todo.todo_completed = req.body.todo_completed;

    todo
      .save()
      .then(todo => {
        res.json("Todo updated");
      })
      .catch(err => {
        res.status(400).send("Update not possible");
      });
  });
});


app.listen(PORT, function() {
  console.log("Successfully started server on port: " + PORT + "....nice!");
});


// Starts connection with mongoDB database
mongoose.connect("mongodb://mern_crud:mern_crud_12345@ds253922.mlab.com:53922/heroku_45h4cfj5" || "mongodb://127.0.0.1:27017/todos");
const connection = mongoose.connection;
connection.once("open", function() {
  console.log("Successfully started connection to MongoDB database .... nice!");
});


