const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/bike");

const schema=new mongoose.Schema({
    name:String,
    model:String,
    price:String,
    Brand:String,
    img: {
        type:String,
        get:(img)=>`http://localhost:5000/image/${img}.jpg`
    }
  
},{timestamps:true, toJSON:{getters:true}});


const contactSchema=new mongoose.Schema({
    name:String,
    email:String,
    message:String,
    subject:String,
    
  
},{timestamps:true});
const model=new mongoose.model("bikecol",schema);
const contactmodel=new mongoose.model("contact",contactSchema);
module.exports=[model,contactmodel];