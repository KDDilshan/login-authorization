import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const route2=express()


route2.get('/api/rewives',(req,res)=>{
    res.send("ypu are in")
})


export {route2 as getroutes}
