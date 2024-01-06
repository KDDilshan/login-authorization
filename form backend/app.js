import express from 'express'
import cors from 'cors';
import {userRouter} from './routes/routes.js';

const app=express()
app.use(cors())
const port=5000

app.use(express.json())
app.use('/v2',userRouter)


app.listen(port,()=>{
    console.log(`the app is listing ${port}`)
})