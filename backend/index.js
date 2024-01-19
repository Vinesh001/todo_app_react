const express = require('express');
const { createTodo, updateTodo } = require('./types');
const {todo} = require('db.js')
const app = express();
const port = 3000;

app.use(express.json());

app.post('/todo', async function(req, res){
    const createPayload = req.body;
     const paresedPayload = createTodo.safeParse(createPayload);
     if(!paresedPayload){
        res.status(411).json({
            message:"You sent the wrong inputs"
        })
        return
     }
     await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
     })

     res.json({
        message:"todo created"
     })
})

app.get('/todos', async function(req, res){
    const todos = await todo.find({});
    res.json({
        message:todos
    })
})

app.put('/completed', async function(req, res){
    const updatePayload = req.body;
    const paresedPayload = updateTodo.safeParse(updatePayload);
    if(!paresedPayload){
        res.status(411).json({
            message:"you sent the wrong credential"
        })
        return
    }

    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })

    res.json({
        message:"Todo marked is completed"
    })
})

app.listen(port, function(){
    console.log(`Server is listening ${port}`)
})