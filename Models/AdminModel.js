const mongoose= require('mongoose')

const AdminSchema= new mongoose.Schema({
    fullName:{
        type:String,
        required:true

    },
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})
module.exports = AdminModel=mongoose.model('admin',AdminSchema)