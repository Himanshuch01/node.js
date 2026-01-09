const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/collegeDB");

const studentSchema = new mongoose.Schema({
  rollNo: Number,
  name: String,
  age: Number
});

const Student = mongoose.model("Student", studentSchema);

async function runCRUD() {
  await Student.create({ rollNo: 201, name: "Riya", age: 21 });
  const students = await Student.find();
  console.log(students);
  await Student.updateOne({ rollNo: 201 }, { age: 22 });
  await Student.deleteOne({ rollNo: 201 });
}

runCRUD();
