const e = require("express")

module.exports = class DatabaseConfig {
    mysql = require("mysql")
    host = "localhost"
    user = "root"
    password = ""
    database = "beetogether"

    table = {
        auth : {
            table_name : 'users',
            columns : {
                id : {
                    name: 'id',
                    type: 'integer',
                    spec: 'PRIMARY KEY NOT NULL AUTO_INCREMENT'
                },
                login : {
                    name: 'username',
                    type: 'varchar(30)',
                    spec: 'NOT NULL'
                },
                password : {
                    name: 'password',
                    type: 'varchar(30)',
                    spec: 'NOT NULL'
                },
                mail : {
                    name: 'email',
                    type: 'varchar(60)',
                    spec: 'NOT NULL'
                }
            }
        }
    }

    initConnection() {
        return this.mysql.createConnection({
            host     : this.host,
            user     : this.user,
            password : this.password,
            database : this.database
        });
    }

    initDatabase(){
        var connection = this.initConnection()
        connection.connect()
        for (const t in this.table) {
            var request = `CREATE TABLE IF NOT EXISTS ${this.table[t].table_name}(`
            for (const column in this.table[t].columns) {
                var col = this.table[t].columns[column]
                request += `${col.name} ${col.type} ${col.spec},`
            }
            request = request.slice(0, -1) + ");"
            connection.query(request, [], function (error, results, fields) {
                if(!error){
                    console.log(`Requete exécutée avec succès`)
                } else {
                    console.log("Error " + error)
                }
            });
        }
        connection.end()
    }
}