const express = require("express")
const app = express()
const conn = require('./database/database')
const Question = require('./database/Question')
const port = 8080

conn.authenticate().then(()=>{
    console.log("Database connected")
}).catch((msg) =>{
    console.log("ERROR: " + msg)
})

app.set('view engine','ejs')
app.use(express.static('public'))

app.use(express.urlencoded({extended: false}))
app.use(express.json())

// ROUTES

app.get("/",(req,res) => {
    Question.findAll({ raw : true, order:[
        ["id", 'DESC']
    ] }).then( question  => {
        res.render("index", {question : question})
    })
})

app.get("/ask",(req,res) => {
    res.render("ask")
})

app.post("/ask", (req, res) => {
    let data = req.body;
    console.log(data)
    Question.create({
        title: data.title,
        desciption: data.desc
    }).then(()=>{
        res.redirect("/")
    })
})

app.get("/question/:id", (req, res) => {
    let id = req.params.id
    Question.findOne({
        where: {id :id}
    }).then(question => {
        if(question){
            res.render("question", {question : question})
        }else{
            res.redirect("/")
        }
    })
})

app.listen(port, () => console.log(`Application running at the port ${port}`))