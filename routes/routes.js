import express from 'express';
import bcrypt from 'bcrypt';
import {cheakuser} from '../contollers/controller.js';

const route=express.Router()


route.post('/api/login',async(req,res)=>{
    try{
        const {username,password}=req.body
        const login=await cheakuser(username,password)

        if(login){
            const passwordmatch=await bcrypt.compare(password,login)

            if(passwordmatch){
                res.send('you are in')
            }else{
                res.status(401).send('invaild credentials')
            }
        }else{
            res.status(404).send('User not found')
        }
    }catch(error){
        console.log('error in fetching dta:',error)
        res.status(404).send('its not ok')
    }
})

export{route as userlogin}