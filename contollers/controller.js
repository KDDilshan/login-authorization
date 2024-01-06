import mysql2 from 'mysql2';
import dotenv from 'dotenv';

const pool=mysql2.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"kavindu123/*-",
    database:"bordim_users"
}).promise()

export const cheakuser=(async(username)=>{
    try{
        const cheak=await pool.query(
            `SELECT password from user
             WHERE username=?`
             ,[username])
        if (cheak[0].length > 0) {
            const storedPassword = cheak[0][0].password
            return storedPassword;
        } else {
            return null;
        }
        
    }catch(error){
        console.log('Error in cheaking user',error)
        throw new Error('Cant find the user')
    }
})