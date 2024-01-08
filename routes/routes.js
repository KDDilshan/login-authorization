import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import {cheakuser} from '../contollers/controller.js';

const route=express.Router()
dotenv.config()

let refreshTokens=[];
route.post('/api/login',async(req,res)=>{
    try{
        const {username,password}=req.body
        const login=await cheakuser(username)

        if(login){
            const passwordmatch=await bcrypt.compare(password,login)

            if(passwordmatch){
                // res.send('you are in')
                const user={name:username}
                const accesstoken=jwt.sign(user,process.env.TOKEN_KEY,{expiresIn:'10s'})
                const refreshtoken=jwt.sign(user,process.env.RE_TOKEN_KEY,{expiresIn:'24h'})
                refreshTokens.push(refreshtoken)
                res.send({accesstoken,refreshtoken})

            }else{
                res.status(401).send('invaild passwords')
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