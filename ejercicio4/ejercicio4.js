function fibonacci(n) {
  let fibSequence = [0, 1]; 
  if (n <= 1) return fibSequence.slice(0, n);

  for (let i = 2; i < n; i++) {
    fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
  }

  return fibSequence;
}

// Ejemplo de uso:
const n = 10;
console.log(fibonacci(n));
