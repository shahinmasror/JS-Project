const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();  // Loads environment variables
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://admin:jLhhUrvdkGUvLKgN@cluster0.evcbu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"  // Use environment variable for MongoDB connection string

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    let con =await client.connect();
    await client.db("admin").command({ ping: 1 });

    const db= client.db('CWD-JS')

    const slidercolllection = db.collection('sliders')
    const productcolllection = db.collection('products')
 
    app.get('/api/get-sliders',async(req,res)=>{
        
        const result = await slidercolllection.find().toArray();
        res.send(result)
    });

    app.get('/api/get-allproducts',async(req,res)=>{
      const result = await productcolllection.find().toArray();
      res.send(result)
    });

    app.get('/api/get-by-id/:id', async (req, res) => {
   
      const {id} = req.params;  // Get the id from the request parameters
      try {
          // Find the product in the collection by its ObjectId
          const result = await productcolllection.findOne({ _id: new ObjectId(id) });
  
          if (result) {
              res.send(result);  // Send the found result back to the frontend
          } else {
              res.status(404).send({ message: 'Item not found' });  // Handle not found
          }
      } catch (err) {
          console.error("Error fetching product:", err);
          res.status(500).send({ message: 'Server error' });  // Handle server errors
      }
  });
    app.get('/api/get-products',async(req,res)=>{
        const totalProducts= await productcolllection.countDocuments();
     
      let skip =0;
      if(totalProducts > 10 )
      {
        skip = totalProducts - 10
      }else{
        skip = 0;
      }
      const result = await productcolllection.find().skip(skip).toArray();
      res.send(result)
  })

    app.listen(process.env.PORT,()=>{
        console.log(`The Server is Running on ${process.env.PORT} PORT`)
    })
  } finally {
    //await client.close();
  }
}

run().catch(console.dir);


