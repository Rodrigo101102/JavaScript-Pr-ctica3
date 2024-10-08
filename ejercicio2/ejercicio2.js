/* 
2.- Invierte una cadena sin usar reverse()
Crea una función en JavaScript que reciba una cadena de texto y devuelva la cadena invertida, pero sin usar el método reverse() ni split(). 
Debes iterar sobre la cadena de caracteres manualmente para construir una nueva en orden inverso.
 */

// Método Manual

function reverseString(cadena) {
    let reversed = '';
    for (let i = cadena.length - 1; i >= 0; i--) {
        reversed += cadena[i];
    }
    return reversed;
}


// Método usando reserved()
/* function reverseString2(cadena) {
    return cadena.split('').reverse().join('');
} */


console.log(reverseString("starcraft dota")); // "atod tfarcrats"
console.log(reverseString("Angel")); // "legnA"
console.log(reverseString("a")); // "a"
console.log(reverseString("")); // ""
