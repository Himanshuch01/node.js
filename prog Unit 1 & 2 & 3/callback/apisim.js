function fetchUser(callback) {
  setTimeout(() => {
    console.log("Fetched user data");
    callback({ name: "Monika", age: 25 });
  }, 2000);
}

fetchUser((user) => {
  console.log("User:", user.name, "| Age:", user.age);
});
