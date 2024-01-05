import express from 'express'
import {userRouter} from './routes/routes.js';

const app=express()
const port=5000

app.use(express.json())
app.use('/v2',userRouter)


app.listen(port,()=>{
    console.log(`the app is listing ${port}`)
})