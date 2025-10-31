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


