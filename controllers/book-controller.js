const express=require('express');
const Book=require('../models/book');
const getAllBooks= async(req,res)=>{
    try {
        const allBooks=await Book.find({});
        if(allBooks?.length>0){
            res.status(200).json({
                success:true,
                message: "List of books found successfully",
                data: allBooks
            })
        }
        else{
            res.status(404).json({
                success: false,
                message :"No books are found in collection!!"
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success : false,
            message :"Something went wrong!!"
        })
        
    }
}

const getSingleBook=async(req,res)=>{
       try {
        
        const getCurrentBookId=req.params.id;
        const BookDetailsByid=await Book.findById(getCurrentBookId);
        if(!BookDetailsByid){
            res.status(404).json({
                success:false,
                message:"Book with current id is not found try with diiferent id"
            })
        }
        else{
            res.status(200).json({
                success :true,
                data: BookDetailsByid
            })
        }
       } catch (error) {
         console.log(error);
         res.status(500).json({
            success : false,
            message :"Something went wrong!!"
        })
       }
}
const addNewBook= async(req,res)=>{
    try {
        const newBookformdata=req.body;
        const newlyCreatedBook=await Book.create(req.body);
        if(newBookformdata){
            res.status(201).json({
                success:true,
                message:"Book added successfully",
                data:newlyCreatedBook
            })
        }
        
    } catch (error) {
        console.log(error);
         res.status(500).json({
            success : false,
            message :"Something went wrong!!"
        })
        
    }
}

const updateBook= async(req,res)=>{
    try {
        const updatedBookFormData=req.body;
        const updatedBookId=req.params.id;
        const updateBook=await Book.findByIdAndUpdate(updatedBookId,updatedBookFormData,{
            new :true
        });
       if(!updateBook){
             res.status(404).json({
                success:false,
                message:"Book with current id is not found"
            });
        }
         
            res.status(200).json({
                success :true,
                message :"Book is upadated successfully",
                data: updateBook
            })
        
        
        
    } catch (error) {
         console.log(error);
         res.status(500).json({
            success : false,
            message :"Something went wrong!!"
        })
    }
}

const deletebook=async(req,res)=>{
    try {
        const getCurrentBookId=req.params.id;
        const deleteBook=await Book.findByIdAndDelete(getCurrentBookId);
        if(!deleteBook){
             res.status(404).json({
                success:false,
                message:"Book with current id is not found"
            })
        }
         else{
            res.status(200).json({
                success :true,
                data: deleteBook
            })
        }
        
    } catch (error) {
        console.log(error);
         res.status(500).json({
            success : false,
            message :"Something went wrong!!"
        })
    }

}
module.exports={getAllBooks,getSingleBook,addNewBook,updateBook,deletebook};