import { ContenedorSQLite } from '../../models/container/ContenedorSQLite.js';
import {Contenedor} from '../../models/container/Contenedor.js';
import { MensajesDAOFirebase } from '../../models/daos/Mensajes.DAO.js';
import { UsersDAOMongoDB } from '../../models/daos/Usuarios.DAO.js';

const cajaMensajes = new MensajesDAOFirebase();
const cajaProducto = new ContenedorSQLite('productos');
const cajaUsuario = new UsersDAOMongoDB();
const cajaImagenes = new Contenedor('./public/img/userImg');

export async function getMessages() {
    try {
        return await cajaMensajes.getAll();
    } catch (error) {
        throw new Error ('Ha ocurrido un problema al obtener los mensajes')
    }
}

export async function getProducts() {
    try {
        return await cajaProducto.getAll();
    } catch (error) {
        throw new Error ('Ha ocurrido un problema al obtener los productos')
    }
}

export async function getUsers() {
    try {
        return await cajaUsuario.getAll()
    } catch (error) {
        throw new Error ('Ha ocurrido un problema al obtener los usuarios')
    }
}

export async function getUserById(id) {
    try {
        return await cajaUsuario.getById(id)
    } catch (error) {
        throw new Error ('Ha ocurrido un problema al obtener el usuario especificado')
    }
}

export async function saveInfoUser(userInfo) {
    try {
        return await cajaUsuario.save(userInfo)
    } catch (error) {
        throw new Error (`Ha ocurrido un problema al guardar el usuario ${userInfo.username}`)
    }
}