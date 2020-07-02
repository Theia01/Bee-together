/*
 * 1) Créez une base de donnée en vous basant sur les informations de config.database.js, que vous pouvez modifier si besoin
 * 2) Lancez la commande 'node init.js' depuis la racine pour créer les tables
 *
*/

const DatabaseConfig = require("./config.database")
require("./config.database")
var dbConfig = new DatabaseConfig
dbConfig.initDatabase()