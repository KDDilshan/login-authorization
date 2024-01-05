import express, { json } from 'express'
const app=express()
const port=5000

app.use(express.json())
app.use('/v1',getmethods)


app.listen(port,()=>{
    console.log(`the app is listing ${port}`)
})