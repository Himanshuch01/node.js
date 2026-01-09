const { MongoClient } = require("mongodb");

// MongoDB connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database name
const dbName = "collegedb";

async function runCRUD() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const students = db.collection("students");

    // ---------------- C - CREATE ----------------
    const insertResult = await students.insertOne({
      rollNo: 101,
      name: "Amit",
      age: 22,
      course: "MCA"
    });
    console.log("Inserted:", insertResult.insertedId);

    // ---------------- R - READ ----------------
    const allStudents = await students.find().toArray();
    console.log("All Students:", allStudents);

    // ---------------- U - UPDATE ----------------
    const updateResult = await students.updateOne(
      { rollNo: 101 },
      { $set: { age: 24 } }
    );
    console.log("Updated Count:", updateResult.modifiedCount);

    // ---------------- D - DELETE ----------------
    const deleteResult = await students.deleteOne({ rollNo: 101 });
    console.log("Deleted Count:", deleteResult.deletedCount);

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

runCRUD();
