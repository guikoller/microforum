const express = require("express")
const app = express()
const port = 8080

app.set('view engine','ejs')

app.get("/",(req,res) => {
    let name = "Guilherme Koller"

    res.render("index", {
        name
    })
})

app.listen(port, () => {
    console.log(`Application running in the port ${port}`)
})