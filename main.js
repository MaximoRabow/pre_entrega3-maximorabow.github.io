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
    let elegirHotel = document.getElementById ("#hotel").value;
    let elegirHabitacion = document.getElementById ("#habitacion").value;
    let cantidadDepasajeros = document.getElementById ("#cantpasajeros").value;
    let cantidadDeHabitaciones = document.getElementById ("#canthabitaciones").value;
    let fechaDeIngreso = document.getElementById ("#fechaingreso").value;
    let fechaDeEgreso = document.getElementById ("#fechaegreso").value;
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
    reservaNueva.push (nuevaReserva);
    console.log (nuevaReserva);
    return nuevaReserva;    
}

const reservas = JSON.parse (localStorage.getItem ("elegirHotel", "elegirHabitacion", "cantidadDepasajeros", "cantidadDeHabitaciones", "fechaDeIngreso", "fechaDeEgreso", "tiempoEstadia", "costoEstadia")) || [];