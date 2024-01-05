import mysql from 'mysql2';
import dotenv from 'dotenv';

const pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"kavindu123/*-",
    database:"bordim_users"
}).promise()

export const createoneuser=(async(name,password,gender,contactNumber)=>{
    try{
        const genderValue = gender === 'female' ? 'F' : 'M';

        const [create]=await pool.query(
            `INSERT INTO User(username,password,gender,contactno)
             VALUES(?,?,?,?)`
            ,[name,password,gender,contactNumber])
        return create
    }catch(error){
        console.log("Error in creating user:",error)
        throw new Error('Cant create new user')
    }
    
})
