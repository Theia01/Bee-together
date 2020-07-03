const assert = require('assert')
const DBService = require('../../app/services/DBService')
const DatabaseConfig = require("../../config.database")

let dbService = null

describe("DBService", () => {
    beforeEach(()=>{
        dbService = new DBService
        const db = new DatabaseConfig
        const database = db.initConnection()
        database.connect()
        database.query(`INSERT INTO ${db.table.auth.table_name} 
            (${db.table.auth.columns.login.name},
             ${db.table.auth.columns.mail.name},
             ${db.table.auth.columns.password.name}) VALUES ('test', 'freiufgeuri.4641A', 'test@test.fr')`)
        database.end()
    })
    afterEach(()=>{
        const db = new DatabaseConfig
        const database = db.initConnection()
        database.connect()
        database.query(`TRUNCATE TABLE ${db.table.auth.table_name}`)
        database.end()
    })
    describe("#insert", () => {
        it("Doit retourner true si le user s'est enregistré", () => {
            // Arrange
            const data = {login: 'test',
                password: 'freiufgeuri.4641A',
                mail: 'test@test.fr'}

            // Act
            dbService.insert(data).then(res => {

                // Assert
                assert.strictEqual(res, true)
            })
        })
        it("Doit retourner false si le user ne s'est pas enregistré correctement", () => {
            // Arrange
            const data = {login: 'test',
                password: 'freiufgeuri.4641A',
                mail: null}

            // Act
            dbService.insert(data).then(res => {

                // Assert
                assert.strictEqual(res, false)
            })
        })
    })
    describe("#select", () => {
        it("Doit retourner un dict de valeurs", () => {
            // Arrange
            const id = 1

            // Act
            dbService.select(id).then(res => {

                //Assert
                assert.equal(res, {
                    login: 'test',
                    password: 'freiufgeuri.4641A',
                    mail: 'test@test.fr'
                })
            })
        })
    })
    describe("#update", () => {
        it("Doit retourner true", () => {
            // Arrange
            const id = 3
            const data = {login: 'updatedTest',
                password: 'freiufgeuri.4641B',
                mail: 'test@test.com'}

            // Act
            dbService.update(id, data).then(res => {

                //Assert
                assert.strictEqual(res, true)
            })
        })
        it("Doit retourner false : id incorrect", () => {
            // Arrange
            const id = 42
            const data = {login: 'test',
                password: 'freiufgeuri.4641A',
                mail: 'test@test.fr'}

            // Act
            dbService.update(id, data).then(res => {

                //Assert
                assert.strictEqual(res, false)
            })
        })
        it("Doit retourner false : login incorrect", () => {
            // Arrange
            const id = 3
            const data = {login: 'aa',
                password: 'freiufgeuri.4641A',
                mail: 'test@test.fr'}

            // Act
            dbService.update(id, data).then(res => {

                //Assert
                assert.strictEqual(res, false)
            })
        })
        it("Doit retourner false : mail incorrect", () => {
            // Arrange
            const id = 1
            const data = {login: 'test',
                password: 'freiufgeuri.4641A',
                mail: 'banane'}

            // Act
            dbService.update(id, data).then(res => {

                //Assert
                assert.strictEqual(res, false)
            })
        })
        it("Doit retourner false : password incorrect", () => {
            // Arrange
            const id = 1
            const data = {login: 'test',
                password: 'aaa',
                mail: 'test@test.fr'}

            // Act
            dbService.update(id, data).then(res => {

                //Assert
                assert.equal(res, false)
            })
        })
    })
    describe("#delete", () => {
        it("Doit retourner false (l'id n'existe pas)", () => {
            // Arrange
            const id = "10"

            // Act
            dbService.delete(id).then(res => {

                // Assert
                assert.strictEqual(res, false)
            })
        })
        it("Doit retourner true (l'id existe)", () => {
            // Arrange
            const id = "1"

            // Act
            dbService.delete(id).then(res => {

                // Assert
                assert.strictEqual(res, true)
            })
        })
    })
})

