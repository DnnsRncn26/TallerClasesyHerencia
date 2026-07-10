//PUNTO 1  - RAPPI - CATÁLOGO DE RESTAURANTES
class Restaurante {                        //como decir la creación del plano
    constructor (nombre, categoria, calificacion){          //función constructora, no se usa la palabra función y corre con new
        this.nombre = nombre;       //propiedades
        this.categoria = categoria;
        this.calificacion = calificacion};
    describir () {                       //método
        return `El nombre del restaurante es ${this.nombre} de categoria ${this.categoria} con calificacion ${this.calificacion}`};
    estaBienCalificado () {                     //método
        return this.calificacion >= 4.5};
};

const restaurantePepes = new Restaurante ("Pepes", "Comida mexicana", 4.2);          //instancias
const restauranteMar = new Restaurante ("Mariscos y Pescados", "Comida de mar", 4.8);


console.log(restaurantePepes.describir());           //aqui trae los datos del método
console.log(restaurantePepes.estaBienCalificado());  // aqui trae los datos del método; si arroja true es porque la calificacion es > = a 4.5 y si no es así entonces arroja false.

console.log(restauranteMar.describir());
console.log(restauranteMar.estaBienCalificado());   
