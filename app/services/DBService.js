const DatabaseConfig = require("../../config.database")
const { resolve } = require("path")

module.exports = class DBService {
    _database = new DatabaseConfig

    constructor() {

    }

    delete(id) {
        return new Promise((resolve,reject) => {
            const db = this._database.initConnection()
                db.connect()
                db.query(
                    `DELETE FROM ${this._database.table.auth.table_name} WHERE ${this._database.table.auth.columns.id.name}=?`, [id], function (error, results, fields) {
                    db.end()
                    if(results && results.affectedRows>0){
                        resolve(true)
                    } else {
                        resolve(false)
                    }
            });
        })
    }

    select(id) {
        return new Promise((resolve,reject) => {
            const db = this._database.initConnection()
            db.connect()
            db.query(
                `SELECT
                ${this._database.table.auth.columns.login.name},
                ${this._database.table.auth.columns.mail.name},
                ${this._database.table.auth.columns.password.name} 
                FROM ${this._database.table.auth.table_name} 
                WHERE ${this._database.table.auth.columns.id.name} = ?`, 
                [id], function (error, results, fields) {
                    if(results){
                        return results[0]
                    }
            });
        })
    }

    insert(data) {
        return new Promise((resolve,reject) => {
            const db = this._database.initConnection()
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
                    db.end()
                    if(error){
                        resolve(false)
                    } else {
                        resolve(true);
                    }
            });
        })

    }

    update(id, data) {
        return null
    }
}
