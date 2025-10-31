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



