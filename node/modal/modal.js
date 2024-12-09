const mongoose=require('mongoose')


const mongooseschema=mongoose.Schema({
    Name :String,
   
});
module.exports=mongoose.model('register',mongooseschema)