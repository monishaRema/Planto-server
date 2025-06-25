const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@remadb.w7lg8gq.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
     await client.connect();

    const plantCollection = client.db("plantDB").collection("plants");

    app.post("/plant", async (req, res) => {
      const formData = req.body;
      const result = await plantCollection.insertOne(formData);
      res.send(result);
    });

    app.get("/", async (req, res) => {
      const result = await plantCollection.find().toArray();
      res.send(result);
      console.log("Result:", result);
    });

    app.get("/plants", async (req, res) => {
      const { sort } = req.query;
      const query = { "care-level": sort };
      const result = await plantCollection.find(query).toArray();
      res.send(result);

    });

    app.get("/latest-plants", async (req, res) => {
      const cursor = plantCollection.find().sort({ createdAt: -1 }).limit(6);
      const plants = await cursor.toArray();
      res.send(plants);
    });
    app.get("/my-plants/:email", async (req, res) => {
      const email = req.params.email;

      const result = await plantCollection.find({ userEmail: email }).toArray();

      res.send(result);
    });

    
    app.get("/plant/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await plantCollection.findOne(query);
      res.send(result);
    });


    app.put("/plant/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };

      const updatedPlant = req.body;
      const updateDoc = {
        $set: updatedPlant,
      };
      const result = await plantCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    app.delete("/plant/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await plantCollection.deleteOne(query);
      res.send(result);
    });


  } finally {
  }
}

run();

app.listen(port, () => {
  console.log(`🚀 Plant Server running on port ${port}`);
});
