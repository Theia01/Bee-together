require("../../config.database")

module.exports = class DBService {
    _database = new DatabaseConfig

    constructor() {

    }

    insert() {
        this._database.initConnection()
        return null
    }
}
