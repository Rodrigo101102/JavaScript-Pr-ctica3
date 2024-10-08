/* 
1.- Determina si un número es primo
Escribe una función en JavaScript que determine si un número entero positivo es primo. Un número es primo si solo es divisible entre 1 y sí mismo, y mayor que 1. 
La función debe recibir un número y devolver true si es primo y false en caso contrario. Asegúrate de optimizar el código para evitar iteraciones innecesarias. 
*/

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    
    return true;
}

console.log(isPrime(1));  // false
console.log(isPrime(4));   // false
console.log(isPrime(7));   // true
console.log(isPrime(9)); // false
console.log(isPrime(97));  // true
console.log(isPrime(100)); // false
