//Ejercicio 1: Libro

function Libro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false;
    this.prestar = function() { 
        if (this.prestado == true) {
            console.log("Error, el Libro está en préstamo.");
        } else {
            this.prestado = true;
            console.log("Libro prestado exitosamente!");
        }
    }
}
const ensayoCeguera = new Libro("Ensayo sobre la ceguera", "Jose Saramago");
console.log(ensayoCeguera.titulo);
console.log(ensayoCeguera.prestado);
console.log(ensayoCeguera.prestar());
console.log(ensayoCeguera.prestado);
console.log(ensayoCeguera.prestar());


//Ejercicio 2: Lista de Compras (Array + for)

function ListaCompras() {
    this.productos = [];
    this.agregar = function(producto) {
        console.log(typeof producto);
        this.productos.push(producto);
    };
    this.mostrar = function(){
        for (let i = 0; i < this.productos.length; i++) {
            const element = this.productos[i];
            console.log(i+1, ". ", element);
        }
    }
}
const listaCompra1 = new ListaCompras();
console.log("Lista de compra: ", listaCompra1.productos);
console.log(listaCompra1.agregar("Televisor"));
console.log(listaCompra1.agregar("Patineta"));
console.log(listaCompra1.agregar("Condominio"));
console.log("Lista de compra: ", listaCompra1.productos);
console.log("Lista de compras numerada: ", listaCompra1.mostrar());

// Ejercicio 3: Reproductor de Música
function Reproductor() {
    this.estado = "detenido";
    this.play = function () {
        if(this.estado == "detenido" || "pausado" ) {
            this.estado = "reproduciendo";
            console.log("Reproduciendo música");
        } 
        else if (this.estado == "reproduciendo"){
            console.log("Ya se está reproduciendo música. ");
        }
    }
    this.pausar = function () {
         if(this.estado == "reproduciendo") {
            this.estado = "pausado";
            console.log("Música pausada.");
        } 
        else {
            console.log("No hay música reproduciéndose.");
        }
    }
    this.detener = function () {
        if (this.estado == "pausado") {
            console.log("No hay música reproduciéndose.");
            this.estado = "detenido";

        } else {
            console.log("Música Detenida.");
        }
    }
}

const reproductor = new Reproductor();
console.log("Reproductor");
console.log(reproductor.estado);
console.log(reproductor.play());
console.log(reproductor.pausar());
console.log(reproductor.play());
console.log(reproductor.detener());
console.log(reproductor.pausar());
console.log(reproductor.pausar());

// Ejercicio 4: Carrito de Compras con Descuentos
function Carrito() {
    this.productos = [];
    this.total = 0;
    this.agregarProducto = function (nombre, precio) {
        let producto = {
            nombre: nombre.toString(),
            precio: parseInt(precio)
        }
        this.productos.push(producto);
    }
    this.calcularTotal = function () {
        this.total = 0;
        for (let i = 0; i < this.productos.length; i++) {
            const producto = this.productos[i];
            this.total += producto.precio;
        }
        console.log("$", this.total);
        return `$ ${this.total}`
    }
    this.calcularDescuento = function () {
        this.calcularTotal();
        console.log("Su total es: $", this.total);
        if (this.total > 100) {
            // 10% de Descuento
            console.log("Aplica 10% de descuento!");
            this.total *= 0.9;
            console.log("Su carrito con descuento queda en: $ ", this.total)
            return `$ ${this.total}`;
        }
        else if (this.total > 50 && this.total < 101) {
            // 5% de Descuento
            console.log("Aplica 5% de descuento!");
            this.total *= 0.95;
            console.log("Su carrito con descuento queda en: $ ", this.total);
            return `$ ${this.total}`;
        }
        else {
            // No aplica Descuento
            console.log("No Aplica descuento!");
            console.log("Su carrito sin descuento queda en: $ ", this.total);
            console.log("le faltan $", 50 - this.total, ". Para recibir un descuento del 5%");
            return `$ ${this.total}`;
        }
    }    
}

const carrito = new Carrito();
console.log("Carrito: ", carrito.productos);
carrito.agregarProducto("Chocolate", 10);
console.log("Total", carrito.calcularTotal());
carrito.agregarProducto("Chocolate", 10);
carrito.agregarProducto("Manzana", 10);
carrito.agregarProducto("Peras", 14);
console.log("Total", carrito.calcularTotal());
console.log("Total Descuento", carrito.calcularDescuento());
carrito.agregarProducto("Tv", 100);
console.log("Total", carrito.calcularTotal());
console.log("Total Descuento", carrito.calcularDescuento());
console.log("Carrito: ", carrito.productos);
