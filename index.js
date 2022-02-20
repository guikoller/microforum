const express = require("express")
const app = express()
const port = 8080

app.set('view engine','ejs')
app.use(express.static('public'))

app.get("/",(req,res) => {
    let name = "Guilherme Koller"
    let produto = [
        {nome:"coca", preco: 2},
        {nome:"pepsi", preco: 3},
        {nome:"dolly", preco: 1},
        {nome:"cini", preco: 28},
        {nome:"itubaina", preco: 2},
        {nome:"fanta", preco: 1.3}
    ]
    res.render("index", {
        name,
        produto
    })
})

app.listen(port, () => {
    console.log(`Application running in the port ${port}`)
})