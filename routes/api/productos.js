const router = require('express').Router();
const Producto = require('../../models/producto.model');


router.get('/',async (req,res)=>{

    const {nombre} =req.params;
    const parametros = req.query
    try{
       const producto =  await Producto.find({id_barberia:parametros.id});
       res.json(producto)
    }
    catch(error){
       res.json({error: error.message})
    }
 });
 
 
 
 
 router.post('/', async (req,res)=>{
     const archivo=req.body;
   
    try{
       await Producto.create(archivo)
       res.json(req.body)
       console.log("Post Producto satisfactorio")
    }
    catch(error ){
       res.json({error: error.messag})
    }
 });

 
router.delete('/delete', async (req,res)=>{
   const parametros = req.query
  try{
   const x=await Producto.findByIdAndDelete(parametros.id)
   console.log("Eliminado con exito")
   res.json("ok")
  }
  catch{
   console.log("Error en eliminado")
   res.json({error: error.message})
  }
})



router.put('/p/:id', async (req,res)=>{
   const {id} =req.params;
   const archivo=req.body;
  
   try{
      const newProduct = await Producto.findByIdAndUpdate(id,archivo,{new:true})
      res.json(newProduct)
      console.log("Put producto satisfactorios")
   }
   catch(error ){
      res.json({error: error.message})
   }
})
module.exports=router;