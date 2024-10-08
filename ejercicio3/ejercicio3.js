/*
3.- Determina si una palabra o frase es un palíndromo
Desarrolla una función que reciba una cadena y determine si es un palíndromo. Debe ignorar los espacios y mayúsculas. 
Puedes usar un bucle para comparar los caracteres desde el principio y el final, acercándote hacia el centro de la cadena.
*/

function isPalindrome(variable) {
    
    let text01 = variable.toLowerCase().replace(/\s/g, '');

    let left = 0;
    let right = text01.length - 1;

    while (left < right) {
        if (text01[left] !== text01[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("radar")); // true
console.log(isPalindrome(",reconocer,")); // true
console.log(isPalindrome("OSO")); // true
console.log(isPalindrome("Angel")); // false
