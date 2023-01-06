import mongoose from 'mongoose';
import MongoDBClient from '../../src/classes/MongoDBClient.class.js';

await mongoose.set('strictQuery', false)

export class ContenedorMongoDB {
    constructor(modelo) {
        this.coleccion = modelo;
        this.conn = MongoDBClient.getInstance();
    }

    async getAll() {
        try {
            await this.conn.connect();
            const docs = await this.coleccion.find();
            return docs;
        } catch(error) {
            console.log(error);
        } finally {
            await this.conn.disconnect();
        }
    }

    async save(obj) {
        try {
            await this.conn.connect();
            let doc = await this.coleccion.create(obj);
            return {status: 'Objeto agregado', doc: doc}
        } catch (error) {
            console.log(error)
            return {error: 'El objeto no se ha guardado. Intenta con otro nombre'}
        } finally {
            await this.conn.disconnect();
        }
    }

    async getById(user) {
        try {
            await this.conn.connect();
            const doc = await this.coleccion.find({username: user})
            if (doc == '') {
                return undefined
            } else {
                return doc[0]
            } 
        }
        catch(error) {
            console.log(error)
        } finally {
            await this.conn.disconnect();
        }
    }

    async deleteById(user) {
        try {
            await this.conn.connect();
            let doc = await this.coleccion.deleteOne({username: user});
            return {status: 'Objeto eliminado con exito', doc: doc}
        } catch (error) {
            console.log(error)
            return {error: 'El objeto no se ha eliminado'}
        } finally {
            await this.conn.disconnect();
        }
    }

    async updateById(user, pass){
        try {
            await this.conn.connect();
            let doc = await this.coleccion.updateOne({username: user}, {password: pass});
            return {status: 'Objeto actualizado con exito', doc: doc}
        } catch (error) {
            console.log(error)
            return {error: 'El objeto no se ha actualizado'}
        } finally {
            await this.conn.disconnect();
        }
    }

    async deleteAll() {
        try {
            await this.conn.connect();
            let doc = await this.coleccion.deleteMany({});
            return {status: 'Todo ha sido eliminado', doc: doc}
        } catch (error) {
            console.log(error)
            return {error: 'No se ha eliminado nada'}
        } finally {
            await this.conn.disconnect();
        }
    }
}