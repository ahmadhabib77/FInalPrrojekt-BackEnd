const mongoose = require( 'mongoose')



// find user schema: is  how user save db in mdb 
const productSchema = new mongoose.Schema({

});

//creat model
const ProductModel = mongoose.model("product", productSchema);

module.exports =  ProductModel;