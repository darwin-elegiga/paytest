const {model,Schema  } = require('mongoose')

const valoracionSchema= new Schema({
   
    valoracion:String,
    estrellas:Number,
    fecha:Date

})

module.exports = model('valoracion', valoracionSchema)