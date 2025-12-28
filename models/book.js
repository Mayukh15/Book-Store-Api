const mongoose=require('mongoose');
//designing the book schema
const BookSchema=new  mongoose.Schema({
    title:{
        type : String,
        required :[true,'Book title is required'],
        trim:true,
        maxlength : [100,'Book title cannot exceed 100  characters']
    },
     author:{
        type : String,
        required :[true,'Author name  is required'],
        trim:true,
    },
    year:{
         type : Number,
         required:[true,'Publication year is required'],
         min:[1000,'Year must be atleast 1000'] ,
         max:[new Date().getFullYear(),'Year cannot be in future'],
    },
    createdAt:{
        type : Date,
        default :Date.now,
    }
});
module.exports =mongoose.model('Book',BookSchema);