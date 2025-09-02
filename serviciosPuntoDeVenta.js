calcularValorDescuento=function(monto,porcentajeDescuento){
let descuento=(monto*porcentajeDescuento)/100;
return descuento;
}
calcularIva=function(monto){
let iva=monto*12/100;
iva=iva.toFixed(3);
return iva;

}
calcularSubtotal=function(precio,cantidad){
subtotal=precio*cantidad;
return subtotal;
}
calcularTotal=function(subtotal,descuento,iva){
    let total=subtotal-descuento+iva;
    return total;
}