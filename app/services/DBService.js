const DatabaseConfig = require("../../config.database")

module.exports = class DBService {
    _database = new DatabaseConfig

    constructor() {

    }

    select() {
        return null
    }

    update(id, data) {
        return null
    }

    insert() {
        this._database.initConnection()
        return null
    }
}
