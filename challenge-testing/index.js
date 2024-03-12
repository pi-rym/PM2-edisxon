class CarritoCompra {
    constructor(){
    this.carrito = []
    }
    agregarProducto(producto){
        this.carrito.push(producto)
    }
    calcularTotal(){
        let total = 0;
        for (const producto of this.carrito) {
            total += producto.precio * producto.cantidad;
        }
        return total;
    }
   aplicarDescuento(porcentaje){
    const total = this.calcularTotal()
    
    const totalFinal = total - (total*(porcentaje/100))
    return totalFinal

   }
    
}

module.exports = CarritoCompra