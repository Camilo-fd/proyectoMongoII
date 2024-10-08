const connect = require("../helpers/connect");

module.exports = class asiento extends connect{
    static instanceAsiento;
    db
    collection

    constructor() {
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection("asientos");
        if (typeof asiento.instanceAsiento === 'object') {
            return asiento.instanceAsiento;
        }
        asiento.instanceAsiento = this;
        return this;
    }

    destructor() {
        connect.instanceConnect = undefined;
        // item.instanceItem = undefined;
    }

    async getAll(){
        await this.conexion.connect();
        const data = await this.collection.find({}).toArray()
        await this.conexion.close();
        return data
    }

    // Permitir la consulta de la disponibilidad de asientos en una sala para una proyección específica.

    /**
         * This function checks the availability of seats for a specific projection.
         * 
         * @param {Object} object - The object containing the necessary parameters.
         * @param {number} object.proyeccion_id - The ID of the projection.
         * @param {Array<number>} object.asiento_id - An array of seat IDs to check.
         * 
         * @returns {Object|Array<string>} 
         * - If successful, returns an object with the available seats.
         * - If there are errors, returns an object with an 'error' property.
         * - If there are validation errors, returns an array of error messages.
     */

    // async checkSeatAvailability(object) {
    //     try {
    //         await this.conexion.connect();
    
    //         let dataProyeccion = await this.db.collection("proyecciones").findOne({ pelicula_id: object.pelicula_id });
    //         if (!dataProyeccion) {
    //             return { error: `No existe la proyección con el ID de película #${object.pelicula_id}` };
    //         }
    
    //         let dataAsiento = await this.collection.find({ proyeccion_id: dataProyeccion.id, estado: "disponible" }).toArray();
    //         if (dataAsiento.length === 0) {
    //             return { error: 'No hay asientos disponibles' };
    //         } else {
    //             return { disponible: dataAsiento };
    //         }
    
    //     } catch (error) {
    //         return { error: error.toString() };
    //     }
    // }
    
    async checkSeatAvailability(objecto) {
        try {
            await this.conexion.connect();
    
            let dataProyeccion = await this.db.collection("proyecciones").findOne({ 
                pelicula_id: parseInt(objecto.pelicula_id),
                fecha: objecto.fecha,
                hora: objecto.hora 
            });
            if (!dataProyeccion) {
                return { error: `No existe la proyección con el ID de película #${objecto.pelicula_id}` };
            }
    
            let dataAsiento = await this.collection.find({ proyeccion_id: dataProyeccion.id}).toArray();
            if (dataAsiento.length === 0) {
                return { error: 'No hay asientos disponibles' };
            } else {
                return { disponible: dataAsiento }; 
            }
    
        } catch (error) {
            return { error: error.toString() };
        }
    }
}