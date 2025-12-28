const express=require('express');
 
//require the all handlers
const {getAllBooks,getSingleBook,addNewBook,updateBook,deletebook}=require('../controllers/book-controller');
//create the express router
const router=express.Router();

//all routes that are related to books only

router.get('/get',getAllBooks);//for all the books
router.get('/get/:id',getSingleBook);
router.post('/add',addNewBook);
router.put('/update/:id',updateBook);
router.delete('/delete/:id',deletebook);

module.exports=router;
