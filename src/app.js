const { json } = require('express')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

require("./index")
const Blog=require("./models/Blog")  // imp
const blogRouter= require("./routes/blog")

app.use(express.json())
app.use(blogRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

