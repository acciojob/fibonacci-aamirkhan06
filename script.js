function fibonacci(num) {
// your code here
	let a = 0, b = 1, temp;

  if (num === 1) return 0; // The first Fibonacci number is 0
  if (num === 2) return 1; // The second Fibonacci number is 1

  for (let i = 3; i <= num; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }

  return a;
}

module.exports = fibonacci;
