class Pelicula {                        //"padre"       como decir la creación del plano
    constructor (titulo, duracion){          //función constructora, no se usa la palabra función y corre con new
        this.titulo = titulo;       //propiedades del padre
        this.duracion = duracion;
        this.precioBase = 15000;
    };
    precioTotalBoleta () {                       //método
        return `base de ${this.precioBase}`
    };
    ficha () {                       //método
        return `El titulo de la película ${this.titulo} tiene una duración de ${this.duracion} minutos con un precio de ${this.precioTotalBoleta()}`
    };
};



class PeliculaVIP extends Pelicula {             // "hijo" que se llama PeliculaVip y con extends hereda
    constructor (titulo, duracion, incluyeComida){ 
        super (titulo, duracion);        //propiedades del padre
        this.incluyeComida = incluyeComida;   //propiedad del hijo
    };
    precioTotalBoleta () {                //solicitud "solicitar el pan en la panaderia"          //    método
        let precio = this.precioBase + 25000;            //todas las películas VIP cuestan el precio base (15000) + 25000: 40000    en let y en if el panadero alista el pan
        if (this.incluyeComida) {                        // solo si incluye comida se adicionan 18000
            precio += 18000;
        };
        return precio;     //return entrega el resultado       "el panadero entrega el pan"
    };
};


//las dos clases tienen a this.precioTotalBoleta(), por eso no es necesario colocar otra vez aqui ficha.
 

const peliculaNormal = new Pelicula ("Las galaxias", 160);         //instancias
const peliculaVip = new PeliculaVIP ("Avatar", 90, true);   //aqui puedo colocar false para que no incluya comida, o colocar true para que sume los 18000 de incluye comida


console.log(peliculaNormal.ficha());
console.log(peliculaVip.ficha());







    // this.titulo = titulo;
    // this.duracion = duracion;
    // this.incluyeComida = incluyeComida};