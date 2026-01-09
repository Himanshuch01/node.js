function getData(callback) {
  let error = null;
  let data = "Sample Data";

  // simulate an error
  if (!data) {
    error = "No data found!";
  }

  callback(error, data);
}

getData(function(err, result) {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("Result:", result);
  }
});
