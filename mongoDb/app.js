const {MongoClient} = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);      
const dbName = 'myDatabase';

module.exports = {client, dbName};

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected successfully to MongoDB server');
    const db = client.db(dbName);
    return db;
  } catch (err) {
    console.error('Database connection error:', err);
    throw err;
  } 
}
// create 
const insertResult = await students.insertOne({ name: 'John Doe', age: 21, major: 'Computer Science' });  
console.log("Inserted document:", insertResult.insertResultedId);

// read
const allStudents = await students.find({}).toArray();
console.log("All students:", allStudents);

// update
const updateResult = await students.updateOne({ name: 'John Doe' }, { $set: { age: 22 } });   
    console.log("Updated document count:", updateResult.modifiedCount);

    //delete 
    const deleteResult = await students.deleteOne({rollNo: 101});
    console.log("Delete Count:",deleteResult.deletedCount);
try{
  const db = await connectToDatabase();
  const students = db.collection('students');
}
catch(err){;
  console.error(err);  
}finally{
  await client.close();
}

