import connectDB from "./db/index.js";
import dotenv from "dotenv"
dotenv.config({
  path: './env'
})
connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server is Running at Port ${process.env.PORT}`)
  })
})
.catch((err)=>{console.log("Db connection failed")})

















// import mongoose from "mongoose"
// import { DB_NAME } from "./constant"

// // import express from "express"
// // (async ()=>{try {
// //   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
// // } catch (error) {
// //   console.error(error)
// //   throw err
// // }})()