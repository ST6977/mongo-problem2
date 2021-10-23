const express = require('express');
const {MongoClient} = require('mongodb');
const cors = require('cors');

const app = express();
const port = 5000;

//pass:932kVsHcZwWGJgrV
//mydbuser1

//middleware
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://mydbuser1:932kVsHcZwWGJgrV@cluster0.jjcvz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function run() {
    try {
      await client.connect();
      const database = client.db("foodmaster");
      const usersCollection = database.collection("users");

      app.get('/', (req,res) => {
        res.send('new r server');
    });

      //post API
      app.post("/users", async (req, res) => {
        const newUser = req.body;

        const result = await userCollection.insertOne(newUser);

    console.log('hitting the post',req.body);
 console.log('added user',result);
     
        res.json(result);
      });

    }
    
   finally {
     //await client.close();
    }
  }
  run().catch(console.dir);



app.listen(port,() => {
    console.log('Running server on port',port);
})