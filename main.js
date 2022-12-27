// variables cantidad de habitaciones 
let habdoble = 4;
let habtriple = 3;
let habcuadruple = 3;
let cantidadDeHabitaciones;
let fechaDeEgreso;
let fechaDeIngreso;

// variables precios de habitaciones
let precioDoble = 5500;
let precioTriple = 7000;
let precioCuadruple = 9000;


// Proceso reserva y costo
class Reserva {
    constructor(hotel, habitaciones, pasajeros, cantidadHab, ingreso, egreso, estadia, costo) {
        this.elegirHotel = hotel;
        this.elegirHabitacion = habitaciones;
        this.cantidadDepasajeros = pasajeros;
        this.cantidadDeHabitaciones = cantidadHab;
        this.fechaDeIngreso = ingreso;
        this.fechaDeEgreso = egreso;
        this.tiempoEstadia = estadia;
        this.costoEstadia = costo;
    }
} 

function crearReserva () {
    let elegirHotel = prompt ("Escriba el hotel que quiere seleccionar entre Down Town o Central Park");
    let elegirHabitacion = prompt ("Escriba la habitacion que quiere seleccionar entre superior o delux");
    let cantidadDepasajeros = prompt ("Escriba el tamaño de habitación que desea, doble, triple, cuadruple");
    let cantidadDeHabitaciones = parseInt (prompt ("Escriba la cantidad de habitaciones que desea reservar"));
    let fechaDeIngreso = parseInt (prompt ("Coloque la fecha en la que estará llegando al hotel"));
    let fechaDeEgreso = parseInt (prompt ("Coloque la fecha en la que estará saliendo del hotel"));
    let tiempoEstadia = (fechaDeEgreso - fechaDeIngreso -1);
    let costoEstadia = (tiempoEstadia * 5500 * cantidadDeHabitaciones);
   
    if (cantidadDepasajeros == "doble" && cantidadDeHabitaciones <= habdoble) {
        console.log (cantidadDeHabitaciones);
        alert ("Hay disponibilidad de la habitación solicitada");
    } else if (cantidadDepasajeros == "doble" && cantidadDeHabitaciones > habdoble) {
        console.log (cantidadDeHabitaciones);
        alert ("No hay disponibilidad de la habitación solicitada");
    } else if (cantidadDepasajeros == "triple" && cantidadDeHabitaciones <= habtriple) {
        console.log (cantidadDeHabitaciones);
        alert ("Hay disponibilidad de la habitación solicitada");
    } else if (cantidadDepasajeros == "triple" && cantidadDeHabitaciones > habtriple) {
        console.log (cantidadDeHabitaciones);
        alert ("No hay disponibilidad de la habitación solicitada");
    } else if (cantidadDepasajeros == "cuadruple" && cantidadDeHabitaciones <= habcuadruple) {
        console.log (cantidadDeHabitaciones);
        alert ("Hay disponibilidad de la habitación solicitada");
    } else if (cantidadDepasajeros == "cuadruple" && cantidadDeHabitaciones > habcuadruple) {
        console.log (cantidadDeHabitaciones);
        alert ("No hay disponibilidad de la habitación solicitada");
    }

    const nuevaReserva = new Reserva (elegirHotel, elegirHabitacion, cantidadDepasajeros, cantidadDeHabitaciones, fechaDeIngreso, fechaDeEgreso, tiempoEstadia, costoEstadia);
    console.log (nuevaReserva);
    return nuevaReserva;    
}