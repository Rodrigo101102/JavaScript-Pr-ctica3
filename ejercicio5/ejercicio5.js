//Melisa Castillon de la Cruz
function calcularEstadisticas(listaNumero) {
    if (listaNumero.length === 0) {
        return {
            media: null,
            mediana: null,
            moda: null
        };
    }

    let suma = 0;
    for (let i = 0; i < listaNumero.length; i++) {
        suma += listaNumero[i];
    }
    const media = suma / listaNumero.length;

    listaNumero.sort((a, b) => a - b);
    const mitad = Math.floor(listaNumero.length / 2);
    let mediana;

    if (listaNumero.length % 2 === 0) {
        mediana = (listaNumero[mitad - 1] + listaNumero[mitad]) / 2;
    } else {
        mediana = listaNumero[mitad];
    }

    const frecuencias = {};
    for (let i = 0; i < listaNumero.length; i++) {
        const num = listaNumero[i];
        frecuencias[num] = (frecuencias[num] || 0) + 1;
    }

    let maxFrecuencia = 0;
    let moda = [];
    for (let num in frecuencias) {
        if (frecuencias[num] > maxFrecuencia) {
            maxFrecuencia = frecuencias[num];
            moda = [num];
        } else if (frecuencias[num] === maxFrecuencia) {
            moda.push(num);
        }
    }

    return {
        media: media.toFixed(2),
        mediana: mediana,
        moda: moda.length === 1 ? Number(moda[0]) : moda.map(Number)
    };
}

const listaNumeros = [1, 2, 2, 3, 4, 4, 4, 5];
const resultado = calcularEstadisticas(listaNumeros);

console.log("Resultados:", resultado);
