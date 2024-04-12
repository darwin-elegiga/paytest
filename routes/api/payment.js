const { application } = require('express');
require('dotenv').config();
const axios = require('axios');

const router = require('express').Router();

router.get('/create-order', async(req,res)=>{
    const order ={
        intent: "CAPTURE",
        purchase_units: [ {
            reference_id: "d9f80740-38f0-11e8-b467-0ed5f89f718b",
            amount: {
                currency_code: "USD",
                value: "110.00" 
                } 
            } ],
        application_context:{
            brand_name:"Mi tienda",
            landing_page:"NO_PREFERENCE",
            user_action: "PAY_NOW",
            return_url:"http://localhost:3000/api/payment/capture-order",
            cancel_url:"http://localhost:3000/api/payment/cancel-order"
        }  

    }
    const params = new URLSearchParams()
    params.append('grant_type','client_credentials')
    const {data:{access_token}} = await axios.post(`https://api-m.sandbox.paypal.com/v1/oauth2/token`,params,{
        auth: {
            username: process.env.PAYPAL_APY_CLIENT,
            password: process.env.PAYPAL_APY_SECRET,
        }
    })
    const response = await axios.post('https://api-m.sandbox.paypal.com/v2/checkout/orders',order,{
        headers:{
            Authorization:`Bearer ${access_token}`
        }
    })
    console.log(response.data)
    return res.json(response.data)
    // router.post
//     var fetch = require('node-fetch');

    // https://api-m.paypal.com/v2/checkout/orders



})

router.get('/capture-order', async(req,res)=>{
    const token =req.query.token
    // console.log(token)
    const response = await axios.post(`https://api-m.sandbox.paypal.com/v2/checkout/orders/${token}/capture`,{},{
        auth: {
            username: process.env.PAYPAL_APY_CLIENT,
            password: process.env.PAYPAL_APY_SECRET,
        }
    })
    console.log(response.data)
    res.json('OK')

})
router.get('/cancel-order', async(req,res)=>{
    res.json('Cancel')

})


module.exports=router;
