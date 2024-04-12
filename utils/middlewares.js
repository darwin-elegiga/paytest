const jwt = require('jsonwebtoken')
const checkToken= (req,res,next)=>{
    if(!req.headers['authorization']){
        return res.json({error: 'incluye cabecera'})
    }
    const token = req.headers['authorization']
    try{
        var payload =jwt.verify(token,'mana_mana')
     }   
    catch(error){
        console.log("error token")
        return res.json('el token no es correcto')
    }
        

        
        next()  
}


module.exports= {checkToken}