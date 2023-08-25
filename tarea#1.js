// Solicitar información al usuario y convertir a números
var nombreProducto = prompt("Ingrese el nombre del producto:");
var cantidadComprada = parseInt(prompt("Ingrese la cantidad comprada:"));
var precioProducto = parseFloat(prompt("Ingrese el precio del producto:"));

// Calcular el total a pagar
var totalPagar = precioProducto * cantidadComprada;

// Mostrar la información al usuario
console.log("Detalle de la compra:\n" +
            "Producto: " + nombreProducto + "\n" +
            "Precio por unidad: $" + precioProducto + "\n" +
            "Cantidad comprada: " + cantidadComprada + "\n" +
            "Total a pagar: $" + totalPagar);