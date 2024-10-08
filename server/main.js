// import { ObjectId } from "mongodb";
// import { asiento } from "./asiento.js";
// import { boleto } from "./boleto.js";
// import { pago } from "./pago.js";
// import { pelicula } from "./pelicula.js";
// import { proyeccion } from "./proyeccion.js";
// import { usuario } from "./usuario.js";


const { ObjectId } = require("mongodb");
const asiento = require("./js/model/asiento.js");
const boleto = require("./js/model/boleto.js");
const pago = require("./js/model/pago.js");
const pelicula = require("./js/model/pelicula.js");
const proyeccion = require("./js/model/proyeccion.js");
const usuario = require("./js/model/usuario.js");

async function main() {
    try {
        // let ObjPelicula = new pelicula()
        // console.log(await ObjPelicula.getAllMovis());
        // ObjPelicula.destructor()

        // let ObjPelicula = new pelicula()
        // console.log(await ObjPelicula.getMovisId({id: 2}));
        // ObjPelicula.destructor()

        // let objBoleto = new boleto();
        // console.log(await objBoleto.buyTicketMovis({
        //     pelicula_id: 2,
        //     proyeccion_id: 2,
        //     fechaCompra: "2025-01-12",
        //     usuario_id: 1,
        //     asiento_id: [3],
        //     precio: 15000,
        //     estado: "pagado"  
        // }));
        // objBoleto.destructor()

        // let objAsiento = new asiento()
        // console.log(await objAsiento.checkSeatAvailability({
        //     proyeccion_id: 1,
        //     // asiento_id: [1]
        // }));
        // objAsiento.destructor()

        // let objBoleto = new boleto();
        // console.log(await objBoleto.reserveSeats({
        //     proyeccion_id: 1,
        //     usuario_id: 1,
        //     asiento_id: [1, 7],
        //     estado: "reservado"
        // }));
        // objBoleto.destructor()

        // let objBoleto = new boleto();
        // console.log(await objBoleto.cancelSeatReservation({
        //     boleto_id: 6
        // }));
        // objBoleto.destructor()

        // let objBoleto = new boleto();
        // console.log(await objBoleto.verifyVIPCard(1));
        // objBoleto.destructor()

        // let objUsuario = new usuario();
        // console.log(await objUsuario.newUser({
        //     nombre: "Miguel_Castro",
        //     email: "miguel_papu@gmail.com",
        //     contraseña: "javascript",
        //     rol: "estandar"
        // }));

        // let objUsuario = new usuario();
        // console.log(await objUsuario.getUserById(2));
        // objUsuario.destructor()

        // let objUsuario = new usuario();
        // console.log(await objUsuario.updateUserRole({
        //     usuario_id: 4,
        //     nuevoRol: "administrador",
        // }));
        // objUsuario.destructor()

        // let objUsuario = new usuario();
        // console.log(await objUsuario.getUsersByRole("vip"));
        // objUsuario.destructor()
    } catch (error) {
        return { error: error.toString() }
    }
}

main()