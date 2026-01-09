function signup(callback) {
  console.log("User signed up");
  callback();
}

function login(callback) {
  console.log("User logged in");
  callback();
}

function showDashboard() {
  console.log("Welcome to the dashboard!");
}

signup(() => {
  login(showDashboard);
});
