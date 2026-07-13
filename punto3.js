class UsuarioNequi {                       //padre
    constructor (nombre, saldo) {
        this.nombre = nombre;                  //propiedades
        this.saldo = saldo;
    };
    enviar (monto) {                          //método 
        if (this.saldo < monto) {
            return `Saldo Insuficiente`;
        }
        else {
            this.saldo = this.saldo - monto;         //si tiene saldo suficiente, entonces se resta, "descontar"
        };
        return `${this.nombre} su nuevo saldo es de ${this.saldo}`;
    };
};


class ComercioNequi extends UsuarioNequi {                   //hijo,  hereda con extends
    constructor (nombre, saldo, comision){
        super (nombre, saldo);           //propiedades heredadas del padre
        this.comision = comision;          //propiedades del hijo
    }; 
enviar (monto) {                            //el padre ya tenia este método, pero como se necesita cobrar comisión, se sobrescribe
    let comisionTotal = monto * this.comision / 100;
    let total = monto + comisionTotal;
    // this.comision + monto
    return super.enviar (total);     //aqui se llama al padre, ya se calculó la comisión por lo que ahora el padre debe descontar el dinero y validar el total  //reutilización sin repetir
}                                    //con super.enviar (total) se usa el método del padre sin volver a escribir el descuento y la relación de saldo insuficiente
}
    // return `valor de la transacción es de ${this.comision}


    const persona = new UsuarioNequi ("Pedro", 10000);         //instancias
    const comercio = new ComercioNequi ("Paypal", 20000, 1);

    console.log(persona.enviar(5000));
    console.log(comercio.enviar(5000));
    
    