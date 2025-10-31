function calculate(a,b,callback){
  let result = a * b;
  callback(result);

}
calculate(12, 5, function(multiplication){
  console.log('The multiplication is:',multiplication);

});