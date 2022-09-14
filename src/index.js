
const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/blog-api", { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{console.log("connection is establised")})
.catch((e)=>{console.log("error")})


