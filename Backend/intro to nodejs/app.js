const express = require('express')
const ejs = require('ejs')
const app = express();

app.set ('view engine', 'ejs')
//get and post
app.get('/', (req, res)=>{
    console.log(req)
    res.render('home', {name: 'Vaibhav'})
})
app.get('/about', (req, res) =>{
    res.send('<h1> About page </h1>')
})
app.get('*', (req, res)=>{
    res.send('<h1> 404 Error </h1>')
})


app.listen(8000, () => {
    console.log('Hey!')
})