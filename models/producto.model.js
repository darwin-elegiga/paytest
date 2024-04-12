const {model,Schema  } = require('mongoose')

const productoSchema= new Schema({
   
    id_barberia:String,
    imagen:String,
    detalles:String,
    precio:Number,

})

module.exports = model('producto', productoSchema)