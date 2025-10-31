function greet(name, callback){
  console.log('Hi ' + name);
  callback();
}
function sayGoodbye(){
  console.log("How are you ?");
}
greet("John ", sayGoodbye);


