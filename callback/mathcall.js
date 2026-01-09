function add(a, b, callback) {
  let sum = a + b;
  callback(sum);
}

add(10, 5, function(result) {
  console.log("Sum is:", result);
});
