var numero = parseFloat(prompt("Ingrese un número:"));

if (numero < 10) {
    if (numero % 2 === 0) {
        console.log("El número es par y menor a 10.");
    } else {
        console.log("El número es impar y menor a 10.");
    }
} else if (numero === 10) {
    console.log("El número es igual a 10.");
} else {
    var cantidadMayoresA10 = 0;
    var sumaMayoresA10 = 0;

    while (true) {
        var otroNumero = parseFloat(prompt("Ingrese otro número mayor a 10 (o ingrese 0 para finalizar):"));

        if (otroNumero === 0) {
            break;
        }

        if (otroNumero > 10) {
            cantidadMayoresA10++;
            sumaMayoresA10 += otroNumero;
        }
    }

    if (cantidadMayoresA10 > 0) {
        console.log("Promedio de números mayores a 10: " + (sumaMayoresA10 / cantidadMayoresA10));
    } else {
        console.log("No se ingresaron números mayores a 10.");
    }
}