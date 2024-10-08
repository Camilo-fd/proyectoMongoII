const { errorMonitor } = require("node-cache");
const connect = require("../helpers/connect");

module.exports = class proyeccion extends connect{
    static instanceProyeccion;
    db
    collection

    constructor() {
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection("proyecciones");
        if (typeof proyeccion.instanceProyeccion === 'object') {
            return proyeccion.instanceProyeccion;
        }
        proyeccion.instanceProyeccion = this;
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

    async getProyeccionId(Objecto) {
        await this.conexion.connect()
        
        try {
            const data = await this.collection.find({pelicula_id: Objecto.pelicula_id}).toArray()
            
            if (!data) {
                return { error: "No exite la proyeccion de la pelicula" }
            }
            return data
        } catch (error) {
            return { error: error.toString() }
        }
    }

    
}