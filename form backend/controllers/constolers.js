import mysql from 'mysql2';
import dotenv from 'dotenv';

const pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"kavindu123/*-",
    database:"boarding_house_finder"
}).promise()

export const createoneuser=(async(id,name,age,password)=>{
    try{
        const [create]=await pool.query(
            `INSERT INTO User(UserID,UserName,Age,Password)
             VALUES(?,?,?,?)`
            ,[id,name,age,password])
        return getoneuser(id)
    }catch(error){
        console.log("Error in creating user:",error)
        throw new Error('Cant create new user')
    }
    
})
