// calling function with the parameters
function calculate(a,b,callback){
  let result = a + b;
  callback(result);

}
calculate(5, 10, function(sum){
  console.log('The sum is:',sum);

});