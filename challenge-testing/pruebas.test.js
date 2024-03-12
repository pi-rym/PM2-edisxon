const CarritoCompra = require("./index")

describe("El Caritto funciona correctamente", () => {
    const carrito1 = new CarritoCompra
    it("efectivamente instancia de CarritoCompra", () => {
        //const carrito1 = new CarritoCompra
        expect(carrito1).toBeInstanceOf(CarritoCompra)
    })

    it("el array inicia vacio correctamente", () => {
        
        expect(carrito1.carrito).toEqual([])
    })
    
    describe("la funcion de agregar productos funciona correctamente", () => {
        const producto1 = {nombre: "cueros", precio: 2000, cantidad: 4}
        const producto2 = {nombre: "cerveza", precio: 6000, cantidad: 2}
        const producto3 = {nombre: "carimañola", precio: 2500, cantidad: 6}

        it("se agrega un producto correctamente", () => {
            carrito1.agregarProducto(producto1)
            expect(carrito1.carrito).toEqual([producto1])
        })
        
    })


})


