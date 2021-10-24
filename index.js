const express = require("express");
//add middleware cors policy
const cors = require('cors')
var bodyParser = require('body-parser')
const ObjectId = require("mongodb").ObjectId;
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

    //------------insert users from ui ----------------------
    //-------post on server-----------------
    app.post("/users",async(req,res)=>{
        const newUser = req.body;
        const result = await userCollection.insertOne(newUser);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
        console.log(result);
        res.json(result);
    })

    //Load data from database and show in website
    app.get("/users",async(req,res)=>{
        console.log("load data from server");
        const cursor = userCollection.find({});
        const users =  await cursor.toArray();
        res.send(users);
    })

    //Delete specific user from ui and server 
    app.delete("/users/:id",async(req,res)=>{
        const id = req.params.id;
        console.log("deleting user",id);
        const query = {_id:ObjectId(id)}
        const result = await userCollection.deleteOne(query);
        res.json(result)
    })

    // Load single item by id and display the user info
    app.get("/users/:id",async(req,res)=>{
        const id = req.params.id;
        const query = {_id:ObjectId(id)};
        const user = await userCollection.findOne(query);
        console.log("load user with id",id);
        res.send(user)

    })

    //Update an user and store in database server
    app.put("/users/:id",async(req,res)=>{
        const id = req.params.id;
        const updatedUser = req.body;
        const filter = {_id:ObjectId(id)};
        const options = {upsert:true};
        const updateDoc = {
            $set:{
                name:updatedUser.name,
                email:updatedUser.email,
                phone:updatedUser.phone,
            },
        }
        const result = await userCollection.updateOne(filter,updateDoc,options)
        console.log("updating user id",id);
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