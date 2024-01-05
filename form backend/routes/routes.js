import express from 'express';
import{createoneuser} from '../controllers/constolers.js'

const router=express.Router()

router.post('/api/create',async(req,res)=>{
    try{
        const {name,password,gender,contactno}=req.body
        const message=await createoneuser(name,password,gender,contactno)
        res.status(200).json({ message: 'User Cretted successfully' })
    }catch(error){
        console.log("Error in fletching data:",error)
        
        if(error.message==='User alraedy exists'){
            res.status(409).json({ error: 'User already exists' })   
        }else{
            res.status(500).json({ error: 'Internal Server Error' })
        }
    }
    
})

export {router as userRouter}