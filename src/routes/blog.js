const express=require("express")
const router=new express.Router()
const Blog=require("../models/Blog")

// Your routing code goes here


router.post('/blog', (req, res) => {   // to create data
    console.log(req.body)
    const user = new Blog(req.body)  
    user.save().then(()=>{
        res.status(201).send(user)
    }).catch((e)=>{
        res.status(404).send(e)
    })
    
})
router.get("/blog",async(req,res)=>{   // to read data by serach query
    try{
        console.log(req.query)
       const data= await Blog.find({
        topic:req.query.search
       }).limit(req.query.page*5)
       res.send(data)
    }catch(e){
        res.send(e)
    }
})

router.get("/blog/:id",async(req,res)=>{     // get data by ID
    try{
      const _id=req.params.id;
      const data= await Blog.findById(_id)
      if(!data){
        return res.send(404).send()
      }
      else{
        return res.send(data)
      }

    }catch(e){
        res.send(e)
    }
})

router.put("/blog/:id",async(req,res)=>{   //update data by id
    try{
       const _id=req.params.id;
       const updateData= await Blog.findByIdAndUpdate(_id,req.body,{ new:true,
       useFindAndModity:false})
       res.send(updateData)
    }catch(e){
        res.send({message: 'either name or weight is missing'})
    }
})

router.delete("/blog/:id",async(req,res)=>{   //delete data by id
    try{
       const _id=req.params.id;
       const deleteData= await Blog.findByIdAndDelete(_id)
       res.send(deleteData)
    }catch(e){
        res.send(e)
    }
})

module.exports = router;