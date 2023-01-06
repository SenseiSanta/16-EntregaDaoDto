import { ContenedorMongoDB } from "../container/ContenedorMongoDB.js"
import UsersModelMongoDB from "../users.js"

export class UsersDAOMongoDB extends ContenedorMongoDB {
    constructor() {
        super(UsersModelMongoDB);
    }
}