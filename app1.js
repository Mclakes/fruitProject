//jshint eversion:6

const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = client.db('fruitDB');
    const movies = database.collection('movies');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);




// Replace the uri string with your MongoDB deployment's connection string.


async function run() {
  try {
    await client.connect();

    const database = client.db("fruitDB");
    const foods = database.collection("fruits");

    // create an array of documents to insert
    const docs = [
      { name: "Apple", score: 8, review: "Great fruit" },
      { name: "Orange", score: 6, review: "kinda sour" },
      { name: "Mango", score: 10, review: "juicy" }
    ];

    // this option prevents additional documents from being inserted if one fails
    const options = { ordered: true };

    const result = await foods.insertMany(docs, options);
    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

