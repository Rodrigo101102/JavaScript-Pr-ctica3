function fibonacci(n) {
  let e = [0, 1]; 
  if (n <= 1) return e.slice(0, n);

  for (let i = 2; i < n; i++) {
    e.push(e[i - 1] + e[i - 2]);
  }

  return e;
}

const n = 10;
console.log(fibonacci(n)); 
