const express = require("express")
const path = require("path")
const hbs = require("hbs")

const app = express()

const port = process.env.PORT || 3000


// public static path
const staticPath = path.join(__dirname, "../public")
const templatesPath = path.join(__dirname, "../Templates/views")
const partialsPath = path.join(__dirname, "../Templates/partials")


app.set("view engine", "hbs" )
app.set("views", templatesPath)
hbs.registerPartials(partialsPath)

app.use(express.static(staticPath))


// ROuting
app.get("/", (req, res) => {
    res.render("index")
})
app.get("/about", (req, res) => {
    res.render("about")
})
app.get("/weather", (req, res) => {
    res.render("weather")
})
app.get("/portfolio",(req, res) => {
    res.render("404error", {
        errornumber:"Ohh!!😩",
        errorMsg: "Sorry, currently working on it"
    })
})
app.get("/*", (req, res) => {
    res.render("404error",{
        errornumber:"404",
        errorMsg: "opps!!🙄, this page does'nt exist"
    })
})


app.listen(port, () => {
    console.log(`server is ready, listening to port at ${port}`);
})