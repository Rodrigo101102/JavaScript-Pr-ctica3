function lanzarDados(nLanzamientos) {
    const resultados = {};

    for (let suma = 2; suma <= 12; suma++) {
        resultados[suma] = 0;
    }

    for (let i = 0; i < nLanzamientos; i++) {
        const dado1 = Math.floor(Math.random() * 6) + 1;
        const dado2 = Math.floor(Math.random() * 6) + 1;
        const suma = dado1 + dado2;

        resultados[suma]++;
    }

    const probabilidades = {};
    for (let suma in resultados) {
        probabilidades[suma] = (resultados[suma] / nLanzamientos) * 100;
    }

    return probabilidades;
}

const nLanzamientos = 100; 
const probabilidades = lanzarDados(nLanzamientos);

// Muestra los resultados
for (let suma in probabilidades) {
    console.log(`Suma ${suma}: ${probabilidades[suma].toFixed(2)}%`);
}