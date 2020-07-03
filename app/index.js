const express = require("express")
const app = express()

const IndexController = require('./Controllers/IndexController')
const indexController = new IndexController

app.get('/', indexController.index)

app.listen(3000, ()=>{
    console.log("Server ok");
});