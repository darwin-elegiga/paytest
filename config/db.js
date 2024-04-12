const mongoose = require('mongoose');

const conectDB= async () =>{
    try{
       await mongoose.connect(process.env.MONGO_URI)
        console.log("conexion DB exitosa")
    }
    catch(error){
        console.log("conexion DB error")

    }
}

module.exports=conectDB;
