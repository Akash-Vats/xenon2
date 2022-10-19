const express=require("express");
const  [col,contactcol]=require("./Database/Database");
const path=require('path')
const cors=require('cors')
const app=express();
const options = {
    origin: ["http://localhost:3000"], 
    credentials: true,
} 
app.use(cors(options));
app.use(express.json())
app.use("/image",express.static(path.join(__dirname,"image"))); 


 

app.get("/",async(req,resp)=>
{ 
   
    const data=await col.find({});
     
    resp.send({data});
})
app.post("/contact",async(req,resp)=>
{ 
   const  {name,email,subject,message}=req.body;

    const data=await new contactcol({name,email,subject,message}).save();
    if(data)
    {
      return  resp.send({error:false})
    }
    return  resp.send({error:true})
})



app.listen(process.env.PORT || "5000",(err)=>
{
    if(err)
    {
        return console.log("Listening error");
    }
    console.log("Listening on port 5000");
})