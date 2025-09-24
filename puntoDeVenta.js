calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto; // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad; // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
    let porcentajeDescuento;

    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;


    //1. Recuperar el nombre del producto como String
    nombreProducto = document.getElementById("txtProducto").value;
    //2. Recuperar el precio como float
    precioProducto = parseFloat(document.getElementById("txtPrecio").value);
    //3. Recuperar cantidad como int
    cantidad = parseInt(document.getElementById("txtCantidad").value);
    //4. Recuperar el porcentaje de descuento como int
    porcentajeDescuento = parseInt(document.getElementById("txtPorcentajeDescuento").value);
    //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
    ValorSubtotal = calcularSubtotal(cantidad, precioProducto);
    // Tomar en cuenta el orden de como pasa los parametos de la funcion y colocar bien
    // los parametros cuando invoca la funcion.
    //5. Mostrar valorSubtotal en el componente lblSubtotal
    // Utilizar mostrarTexto
    valorSubtotal = calcularSubtotal(precioProducto, cantidad);
    valorSubtotal = ValorSubtotal.toFixed(2);
    mostrarTexto("lblSubtotal", valorSubtotal);
    /*
       Caso de prueba: 
           - cantidad: 10
           - precioProducto: 5.4  
           Subtotal esperado: 54
       Si el caso de prueba es exitoso, hacer un commit
    */
    //6. Invocar a calcularValorDescuento y lo que devuelve guardar en la variable valorDescuento
    valorDescuento = calcularValorDescuento(valorSubtotal, porcentajeDescuento);
    valorDescuento = valorDescuento.toFixed(2);
    mostrarTexto("lblDescuento", valorDescuento);
    //7. Mostrar el resultado en el componente lblDescuento
    /*
        Caso de prueba: 
            - cantidad: 10 
            - precioProducto: 5.4  
            - descuento: 10
            - Descuento esperado: 5.4
        Si el caso de prueba es exitoso, hacer un commit
     */
    //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
    let monto = valorSubtotal - valorDescuento;
    valorIVA = calcularIva(monto);
   // valorIVA = valorIVA.toFixed(2);
    mostrarTexto("lblValorIVA", valorIVA);
    // El IVA debe calcularse sobre el valor del subtotal menos el descuento
    //9. Mostrar el resultado en el componente lblValorIVA    
    /*
        Caso de prueba: 
            - cantidad: 10 
            - precioProducto: 5.4  
            - descuento: 10

                - valorSubtotal: 54
                - descuento:5.4
                - valorSubtotal 
                - descuento: 48.6

            IVA esperado: 5.832

        Si el caso de prueba es exitoso, hacer un commit
    */
    //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
    valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
    //11. Mostrar el resultado en el componente lblTotal
    mostrarTexto("lblTotal", valorTotal);
    /*
        Caso de prueba: 
            - cantidad: 10
            - precioProducto: 5.4 
            - descuento: 10

                --valorSubtotal: 5.4
                --descuento: 5.4
                --IVA: 5.832

                Total esperado: 54.432

                Si el caso de prueba es exitoso, hacer un commit
       */

    //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
    /*
        Ejemplo: 
            Valor a pagar por 20 cerveza corona con 10% de descuento: USD 48.75
        Si funciona, hacer un commit
    */

}
limpiar = function () {
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
}
/* SI TODO FUNCIONA, HACER UN PUSH */