const mongoose=require("mongoose");
const conn= async (req,res)=>{
    try {
        await mongoose.connect("mongodb+srv://bishwasritik07:Etzhk3XTaY6ikE0U@cluster0.nyjrzne.mongodb.net/").then(()=>{
        console.log("Connected");
    });
    } catch (error) {
        res.status(400).json({
            message:"Not Connected",
        });
    }
};
conn();