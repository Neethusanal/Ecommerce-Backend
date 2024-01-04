const express=require("express")
const cors=require("cors")
const app=express()
const dotenv=require("dotenv")
const user=require('./Routes/userRoutes')
const server = require('http').createServer(app);
app.use(express.json())
app.use(cors({
    option:[process.env.BASE_URL],
    method:['GET','POST','PUT','DELETE'],
    credentials:true

}))
const port = process.env.PORT || 4000
app.use('/', user);
server.listen(port,()=>{
    console.log(`Backend/server listen to port ${port}`)
})