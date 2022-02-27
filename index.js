const express = require("express")
const app = express()
const port = 8080

app.set('view engine','ejs')
app.use(express.static('public'))

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get("/",(req,res) => {
    res.render("index")
})

app.get("/ask",(req,res) => {
    res.render("ask")
})

app.post("/ask", (req, res) => {
    let data = req.body;
    console.log(data)
    res.send('form received')
})

app.listen(port, () => console.log(`Application running at the port ${port}`))