const express=require('express')
const app=express() 
const cors=require('cors')
 
const ApiRouter =require('./router/router')
const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/friday').then(()=>
{
    console.log("data-base is connected to friday")
}).catch((error)=>{
  console.log (`error in data-base ${error}`)
})

app.use(cors());




app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(ApiRouter);
  






const PORT = 7000
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})
