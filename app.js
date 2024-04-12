const express = require('express');
const cors= require('cors');
const conectDB = require('./config/db');
require('dotenv').config();
require('./config/db')
const app = express();


const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '20mb' }));

//config
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}));
conectDB()

const PORT = process.env.PORT||3000
app.listen(PORT, ()=>{
    console.log(`Listen in ${PORT}`)
})
const PAYPAL_API_SECRET = process.env.PAYPAL_APY_SECRET
const PAYPAL_API_CLIENT = process.env.PAYPAL_APY_CLIENT
const PAYPAL_API ="https://api-m.sandbox.paypal.com"


// curl -v -X POST "https://api-m.sandbox.paypal.com/v1/oauth2/token"\
//  -u "CLIENT_ID:CLIENT_SECRET"\
//  -H "Content-Type: application/x-www-form-urlencoded"\
//  -d "grant_type=client_credentials"
//get
app.use('/api', require('./routes/api'))