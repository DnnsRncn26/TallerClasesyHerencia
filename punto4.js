class Vehiculo {            //plano de lo que tienen todos los vehiculos, "padre"
    constructor (placa, pasajeros) {
    this.placa = placa;            //propiedades
    this.pasajeros = pasajeros;
    };
tarifa () {              //método
    return 2950;
};
reporte () {             //método
    return `La placa es ${this.placa}, con ${this.pasajeros} pasajeros a bordo, y tiene una tarifa de ${this.tarifa()} por persona`;
};
};


class Alimentador extends Vehiculo {      //hereda de vehiculo
    tarifa () {                 //método
        return 0;               //se sobreescribe el método de tarifa de arriba
    };
};
    // return super.tarifa (total);


class BusDual extends Vehiculo {         //tambien hereda de vehiculo
    constructor (placa, pasajeros, esElectrico) {
    super (placa, pasajeros);     //el super llama los datos del constructor de vehiculo, osea del "padre"
    this.esElectrico = esElectrico;
};
tarifa () {                         //método  aqui se vuelve a sobreescribir el método de tarifa
    if (this.esElectrico){
        return 2500;
    }
    else {
        return 3200;        //si no es electrico entonces son 3200
    };
};
};


class BusArticulado extends Vehiculo {            //reto final y no hubo que cambiar ningun dato del for
    tarifa (){
        return 3500;
    }
}


let flota = [  
    new Vehiculo ("YTG598", 4),               //instancias dentro del arreglo
    new Alimentador ("UHH845", 16),
    new BusDual ("ACG400", 50, true),
    new BusArticulado ("SDD233", 200)
];
for (let buses of flota) {                    //el for ... of es tener una lista de cosas y pasar revisando una por una, se evita uno colocar muchos console.log, con ese for se recorren los datos del arreglo
    console.log (buses.reporte());        //todos los tipos de buses usan reporte(), pero cada objeto arroja sus datos correspondientes.
};


//punto1.js: clase, constructor, métodos.
//punto2.js: herencia, extends, sobreescribir un metodo
//punto3.js: super dentro de un método, reutilizar sin repetir
//punto4.js: polimorfismo con un arreglo de objetos