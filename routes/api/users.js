const router = require('express').Router();
const User = require('../../models/user.model.js')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// router.post('/register',async (req,res)=>{
//     console.log(req.body)
//     const aux = await User.findOne({username: req.body.username})
//     //esto fue lo que hice 
//     if(aux){
//         console.log({error: 'este usuario ya existe'})
//         return res.json({error: 'este usuario ya existe'})
//     }
//     else{
//         try{
//             req.body.password=bcrypt.hashSync(req.body.password,12)
//             const user = await User.create(req.body);
//             res.json({
//                 success: 'Ok',
//                 token: createToken(user),
//                 user: user.username
//             })
//             console.log("Agregado usuario")
        
//            }
//            catch(error){
//             res.json({error: error.message})
//            }
//     }
    
// }); 



// router.post('/login',async (req,res)=>{
//     // console.log(req.body)
//    try{
//         const user = await User.findOne({username: req.body.username})
//         if(!user){
//             console.log({error: 'Error en usuario/contraseña'})
//             return res.json({error: 'Error en usuario/contraseña'})
//         }

//         const eq=bcrypt.compareSync(req.body.password,user.password)
//         if(!eq){
//             console.log({error: 'Error en usuario/contraseña'})

//             return res.json({error: 'Error en usuario/contraseña'})
//         }
//        console.log(user.barbero)

//        try{
//         res.json({
//             success: 'OK',
//             token: createToken(user),
//             user: user._id,
//             role: user.role,
//             barbero: user.barbero
//         })
//         console.log("Aceptado usuario")

//        }
//        catch(e){
//         res.json({error: error.message})

//        }

       
//    }
//    catch(error){
//          res.json({error: error.message})
//    }
// });


// router.put('/login',async (req,res)=>{
//     try{
//         const user =await User.findById(req.body.id)
//         // console.log(user)
//         const eq=bcrypt.compareSync(req.body.OldPassword,user.password)
        
//         if(!eq){
//             console.log({error: 'Verifique contraseña antigua'})
//             return res.json('Error de contraseña')
//         }
      
//         let Newpassword=bcrypt.hashSync(req.body.NewPassword,12);
//         user.password=Newpassword;
//         await user.save()
//         console.log("Contraseña cambiada ok")
//         res.json("OK Cambio de contraseña")
        
//     }  
//      catch(error){
//         res.json({error:error.message})

//     }
//     });

// function createToken(user){
//     const payload={
//         user_id: user.user_id,
//         user_role: user.role
//     }
//     return jwt.sign(payload,'mana_mana')
// }


module.exports=router;
