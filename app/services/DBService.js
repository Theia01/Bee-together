const DatabaseConfig = require("../../config.database")
const { resolve } = require("path")

module.exports = class DBService {
    _database = new DatabaseConfig

    constructor() {

    }

    select() {
        return null
    }

    insert(data) {
        return new Promise((resolve,reject) => {
            var db = this._database.initConnection()
            db.connect()
            db.query(
                `INSERT INTO ${this._database.table.auth.table_name} 
                (${this._database.table.auth.columns.login.name},
                ${this._database.table.auth.columns.mail.name},
                ${this._database.table.auth.columns.password.name} ) VALUES(?,?,?)`, 
                [
                data.login,
                data.mail,
                data.password
                ], function (error, results, fields) {
                    if(error){
                        resolve(false)
                    } else {
                        resolve(true);
                    }
            });
        })
    }
}
