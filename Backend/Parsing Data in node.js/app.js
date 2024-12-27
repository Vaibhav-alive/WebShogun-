const express = require('express');
const ejs = require('ejs');
const app = express()
const mongoose = require('mongoose')


const bodyparser = require('body-parser');
const { TopologyDescriptionChangedEvent } = require('mongodb');
app.use(bodyparser.urlencoded({extended: true}))

//connecting moongoDB to database
mongoose.connect('mongodb+srv://vaibhav:Nika_5th@cluster0.1cdsk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log('database connected')
})
const todoSchema = new mongoose.Schema({
    title: {type: String, required: true},
    duedate: {type: String}
})
//model
const Todos = mongoose.model('todos', todoSchema)

app.set('view engine', 'ejs')
app.get('/', (req, res)=>{
    res.render('welcome')
})
app.get('/todos', async(req, res)=>{
    let todos =  await Todos.find() 
    // todos.sort((a,b)=> new Date(a.duedate) - new Date(b.duedate))
    res.render('index', {todos: todos})
})
app.post('/add-task', (req, res)=>{
   let {todo} = req.body;
   let data = new Todos({
    title: todo,
    
   })
   data.save();
    res.redirect('/')
})
app.listen(8000,()=>{
    console.log('server is running on 8000')
})