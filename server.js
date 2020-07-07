const express        = require('express')
const cors             = require('cors')
const data             = require( './data')
const dotenv         = require( 'dotenv')
const config          = require( './config')
const mongoose    = require( 'mongoose')
const userRoute     = require( './routes/userRoute')
const bodyParser    = require('body-parser')

//env
dotenv.config();
const mongodbUrl = config.MONGODB_URL;
 //mongoose
mongoose.connect(process.env.MONGODB_URL1, {
     useNewUrlParser: true ,   //no woring in conaole
     useUnifiedTopology:true,
     useCreateIndex: true
}).catch(error => console.log(error.reason));
mongoose.set('useCreateIndex', true);  


const app = express();
app.use(bodyParser.json());
app.use(cors())
app.use("/api/users", userRoute);
app.get("/api/product/:id", (req, res) => {
     const productId = req.params.id;
     const product = data.products.find(x=>x._id === productId);
     if(product)
     res.send(product);
     else
     res.status(404).send({msg: "product Not Found."})
});

app.get("/api/products", (req, res) => {
     res.send(data.products);
});



app.listen(5000, () => { console.log("server start at http://localhost:5000")});