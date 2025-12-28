const mongoose=require('mongoose');

const connectToDB=async()=>{
    try {
        await mongoose.connect('mongodb+srv://mayukhadhikari2024_db_user:mayukhadhikari2025@cluster0.hqbm1qe.mongodb.net/');
        console.log("Mongodb is connected successfully");
        
    } catch (error) {
        console.error("MongoDB connection failed",error);
        process.exit(1);
    }
}
module.exports=connectToDB;