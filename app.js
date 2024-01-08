import express from 'express';
import {userlogin} from './routes/routes.js';
import bodyParser from 'body-parser';
import {getroutes} from './routes/reviews.js';
import {verification} from './middleware/auth.js';


const app= express()
const port=4000

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/v2',userlogin)
app.use('/v2',verification,getroutes)


app.listen(port,()=>{
    console.log(`server is liting to port ${port}`)
})