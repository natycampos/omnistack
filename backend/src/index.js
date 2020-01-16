const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express(); 

mongoose.connect('mongodb+srv://nathalia:omnistack@cluster0-v4e53.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,    
    useUnifiedTopology: true, 
});

app.use(express.json()); // Esse código precisa vir antes das rotas
app.use(routes); 

app.listen(3333); 