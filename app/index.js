const express = require("express")
const app = express()

const IndexController = require('./Controllers/IndexController')
const indexController = new IndexController

app.get('/hello', indexController.index)

app.get('/', (req, res)=>{
    res.sendFile('index.html', {root : __dirname + '/public'})
})

app.listen(3000, ()=>{ });