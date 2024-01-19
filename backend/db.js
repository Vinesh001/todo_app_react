const mongoose = require('mongoose');

// 1b7u4G2Cc07VJnAd
// mongodb+srv://vineshbaghel10:<password>@cluster0.v1oofyl.mongodb.net/

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports={
    todo
}