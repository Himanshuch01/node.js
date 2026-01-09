const students = mongoose.connection.collection('students', studentsSchema);

async function runCRUD( ) {
  await students.create({ name: 'John Doe', age: 21, major: 'Computer Science' });
  const students =await students.find({}).toArray();
  console.log(students);
  
}