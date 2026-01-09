function calculate(a, b, operation) {
  operation(a, b);
}

calculate(10, 5, (x, y) => console.log("Addition:", x + y));
calculate(10, 5, (x, y) => console.log("Multiplication:", x * y));
