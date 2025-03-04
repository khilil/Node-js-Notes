import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");
const run = async () =>  {
  await client.connect();

  const db = client.db("mongodb_nodejs_db");
  const userCollection = db.collection("users");

  // userCollection.insertOne({ name: 'John Doe', age: 30 });
// userCollection.insertMany([
//   { name: "Abhishek", age: 30, role: "user" },
//   { name: "Neel", age: 33, role: "user" },
//   { name: "Khilil", age: 35, role: "Admin" },
// ]);

const userCursor = userCollection.find();

// console.log(userCursor);

// for await (const user of userCursor) {
//   console.log(user);
// }

// const user = await userCollection.findOne({ name: "Abhishek" });
// console.log(user);
// console.log(user._id.toHexString());

// const data = await userCollection.find({});
// console.log((await data.toArray()));

//! Upadte

// await userCollection.updateOne({name: "Abhishek"}, {$set: {age: 12}})

//! Delete 
await userCollection.deleteOne({name: "Abhishek"})

  // client.close();
}

run().catch(console.dir);
