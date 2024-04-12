const router = require('express').Router();
const Valoracion = require('../../models/valoraciones.model')

// router.get('/',async (req,res)=>{

//     const {nombre} =req.params;
//     const parametros = req.query
//     // let nombre_find=nombre.toUpperCase()
  
//     try{
//        const valoracion =  await Valoracion.find({fecha:{$gte:parametros.fecha}});
//       console.log("Get valoraciones ok")
//        res.json(valoracion)
//       // console.log(valoracion)
     
//     }
//     catch(error){
//        res.json({error: error.message})
//     }
//  });
 
 
 
 
//  router.post('/', async (req,res)=>{
//      const archivo=req.body;
//     // archivo.user_creator=archivo.user_creator.toUpperCase()
//     // archivo.nombre_remitente=archivo.nombre_remitente.toUpperCase()
//     // archivo.nombre_beneficiario=archivo.nombre_beneficiario.toUpperCase()
 
//     try{
//        await Valoracion.create(archivo)
//        res.json(req.body)
//        console.log("Post Valoracion satisfactorio")
//       }
//     catch(error ){
//        res.json({error: error.message})
//     }
//  });

module.exports=router;