// error-first callback pattern
// Node.js uses a standard error-first callback stayle for async functions
function getData(callback){
  let error = null;
  let data = 'simple data';
  // simulate an error
  if(!data){
    error = "No data found!";

  }
  callback(error, data);

}
getData(function(err, result){
  if(err){
    console.log("Error:", err);
  } else{
    console.log("Result", result);
  }
});
