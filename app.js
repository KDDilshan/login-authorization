import express from 'express';
import {userlogin} from './routes/routes.js';
import bodyParser from 'body-parser';


const app= express()
const port=4000


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/v2',userlogin)


app.listen(port,()=>{
    console.log(`server is liting to port ${port}`)
})