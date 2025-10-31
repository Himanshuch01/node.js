function task1(callback){
  console.log("task  1 done ");
  callback();
}
function task2(callback){
  console.log("task 2 done");
  callback();
}
function task3(callback){
  console.log("task 3 done");
  callback();
}
task1(()=> task2(task3));
