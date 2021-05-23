const express = require("express");
const path= require("path")
const app = express()
const hbs=require("hbs")
const port =3000

const static_path=(path.join(__dirname,"../public"))
const v_path=(path.join(__dirname,"../views/asset"))
const p_path=(path.join(__dirname,"../views/partials"))


app.set("view engine", "hbs");
app.set("views",v_path)
hbs.registerPartials(p_path)

app.use(express.static(static_path))

app.get("",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})
app.get("*",(req,res)=>{
res.render("error",{
    errormsg:"oooooooooopppppps"
})
})

app.listen(port,()=>{
    console.log(`listening ${port}`)
})