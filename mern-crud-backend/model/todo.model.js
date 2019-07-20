const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creates schema for Todo model
let Todo = new Schema({
    todo_description: {
        type: String
    },
    todo_responsible:{
        type: String
    },
    todo_priority:{
        type: String
    },
    todo_completed:{
        type: Boolean
    }
})

module.exports = mongoose.model('Todo', Todo);