const mongoose=require("mongoose")


mongoose.connect(process.env.DATABASE_URL,{
    useUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Database connection successful")
}).catch(err=>{
    console.log(err.message)
})
