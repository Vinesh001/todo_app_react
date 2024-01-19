const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/todo', function(req, res){
    const createPayload = req.body;
     const paresedPayload = createTodo.safeParse(createPayload);
     if(!paresedPayload){
        res.status(411).json({
            message:"You sent the wrong inputs"
        })
        return
     }
})

app.get('/todos', function(req, res){

})

app.put('/completed', function(req, res){
    const updatePayload = req.body;
    const paresedPayload = updateTodo.safeParse(updatePayload);
    if(!paresedPayload){
        res.status(411).json({
            message:"you sent the wrong credential"
        })
        return
    }

})

app.listen(port, function(){
    console.log(`Server is listening ${port}`)
})