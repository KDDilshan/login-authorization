import express from 'express';
const router=express.Router()
import{createoneuser} from '../controllers/constolers'

router.post('/api/create',async(req,res)=>{
    try{
        const {id,name,age,password}=req.body
        const hash=await bcrypt.hash(password,5)
        const message=await createoneuser(id,name,age,hash)
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