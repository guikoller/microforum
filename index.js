const express = require("express")
const app = express()
const port = 8080

app.set('view engine','ejs')
app.use(express.static('public'))

app.get("/",(req,res) => {
    res.render("index")
})


app.get("/ask",(req,res) => {
    res.render("ask")
})

app.listen(port, () => console.log(`Application running in the port ${port}`))