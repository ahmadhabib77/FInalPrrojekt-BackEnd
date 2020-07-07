const mongoose =  require( 'mongoose')



// find user schema: is  how user save db in mdb 
const userSchema = new mongoose.Schema({
     name: {type: String,  required: true},
     email: {type: String, required: true, unique:true, dropDups: true},
     password: { type: String, required: true},
     isAdmin: { type:Boolean, required: true, default:false}
});

//creat model
const userModel = mongoose.model("User", userSchema);

module.exports = userModel;