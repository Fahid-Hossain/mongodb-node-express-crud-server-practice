const express = require("express");
//add middleware cors policy
const cors = require('cors')
var bodyParser = require('body-parser')
const app = express();
const port = 5000;


// add middleware 
app.use(cors())
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    console.log("noder baccha node re");
    res.send("Oi node .. Khara aitasi")
})


//mongodb atlas connect(password:6fHF9o4R4zIDiSv6,useraName:mydbuser2)

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://mydbuser2:6fHF9o4R4zIDiSv6@cluster0.w2qch.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// insert users hardcoded
// client.connect(err => {
//   const usersCollection = client.db("Ecommercesite").collection("users");
//   // perform actions on the collection object

//   const user = {name:"fahid",email:"fahid@gmail.com",phone:"0889"}
//   usersCollection.insertOne(user)
//   .then(()=>{
//       console.log("insert success");
//   })

// //   client.close();
// });

// insert users by async await
async function run() {
    try {
      await client.connect();
      const database = client.db("Ecommercesite");
      const userCollection = database.collection("users");
      // create a document to insert

      //insert users hardcodded
    //   const user = {
    //     name: "Fahid al arab",
    //     email: "fahidalarab@gmail.com",
    //     phone:"9890"
    //   }
    //   const result = await userCollection.insertOne(user);
    //   console.log(`A document was inserted with the _id: ${result.insertedId}`);

    //insert users from ui
    //post on server
    app.post("/users",async(req,res)=>{
        const newUser = req.body;
        const result = await userCollection.insertOne(newUser);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
        console.log(result);
        res.json(result);
    })

    } finally {
    //   await client.close();
    }
  }
  run().catch(console.dir);


app.get("/",(req,res)=>{
    console.log("noder baccha node re");
    res.send("Oi node .. Khara aitasi")
})

app.listen(port,()=>{
    console.log("listening port",port);
})