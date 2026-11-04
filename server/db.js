const mongoose = require("mongoose");


const uri = process.env.ATLAS_URI;

async function connectDB(){
    try {
        await mongoose.connect(uri);
        console.log("Conectado ao MongoDB");
        console.log("Banco conectado: ", mongoose.connection.name);
    }catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;