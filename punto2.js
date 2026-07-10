class Pelicula {                        //como decir la creación del plano
    constructor (titulo, duracion){          //función constructora, no se usa la palabra función y corre con new
        this.titulo = titulo;       //propiedades
        this.duracion = duracion;
        this.precioBase = 15000};
    precioBoleta () {                       //método
        return `El precio de la boleta es de ${this.precioBase}`};
    ficha () {                       //método
        return `El titulo de la película es ${this.titulo} con una duración de ${this.duracion} minutos con un precio de ${this.precioBoleta()}`};
}



class PeliculaVIP extends Pelicula{
    constructor (titulo, duracion, incluyeComida){
        super (titulo, duracion);
        this.incluyeComida = incluyeComida
        precioBoleta(){
            return this.precioBase + 25000       // se suma 25000 por la silla VIP
            if (this.incluyeComida >= 18000){

            }
        }
 



    // this.titulo = titulo;
    // this.duracion = duracion;
    // this.incluyeComida = incluyeComida};
}