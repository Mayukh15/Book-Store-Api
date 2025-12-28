require('dotenv').config();
const express=require('express');
const app=express();
const connectToDB=require('./database/db'); //1
const bookroutes=require('./routes/book-routes'); //2
const PORT=3000;
connectToDB(); //3
app.use(express.json()); 
app.use('/api/books',bookroutes); //4 //it is a parent route so use fucntion is used here
app.get('/hi',(req,res)=>{
     res.send("Hello");
})
app.listen(PORT,  () => {
  console.log(`Server running on port ${PORT}`);
});