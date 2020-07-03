const assert = require('assert')
const DBService = require('../../app/services/DBService')

describe("DBService", () => {
    describe("#insert", () => {
        it("Doit retourner true si le user s'est enregistré", () => {
            // Arrange
            const dbService = new DBService()
            let result = null
            const data = {login: 'test',
                password: 'freiufgeuri.4641A',
                mail: 'test@test.fr'}

            // Act
            result = dbService.insert(data)

            //Assert
            assert.strictEqual(result, true)
        })
        it("Doit retourner false si le user ne s'est pas enregistré correctement", () => {
            // Arrange
            const dbService = new DBService()
            let result = null
            const data = {login: 'test',
                password: 'freiufgeuri.4641A',
                mail: null}

            // Act
            result = dbService.insert(data)

            //Assert
            assert.strictEqual(result, false)
        })
    })
    describe("#select", () => {
        it("Doit retourner true", () => {
            // Arrange
            const dbService = new DBService()
            let result = null

            // Act
            result = dbService.select()

            //Assert
            assert.strictEqual(result, true)
        })
    })
    describe("#update", () => {
        it("Doit retourner true", () => {
            // Arrange
            const dbService = new DBService()
            let result = null
            const id = 1
            const data = {login: 'test',
                password: 'freiufgeuri.4641A',
                mail: 'test@test.fr'}

            // Act
            result = dbService.update(user)

            //Assert
            assert.strictEqual(result, true)
        })
        it("Doit retourner false : id incorrecte", () => {
            // Arrange
            const dbService = new DBService()
            let result = null
            const id = 2
            const data = {login: 'test',
                password: 'freiufgeuri.4641A',
                mail: 'test@test.fr'}

            // Act
            result = dbService.update(id, data)

            //Assert
            assert.strictEqual(result, false)
        })
        it("Doit retourner false : login incorrect", () => {
            // Arrange
            const dbService = new DBService()
            let result = null
            const id = 1
            const data = {login: 'aa',
                password: 'freiufgeuri.4641A',
                mail: 'test@test.fr'}

            // Act
            result = dbService.update(id, data)

            //Assert
            assert.strictEqual(result, false)
        })
        it("Doit retourner false : mail incorrect", () => {
            // Arrange
            const dbService = new DBService()
            let result = null
            const id = 1
            const data = {login: 'test',
                password: 'freiufgeuri.4641A',
                mail: 'banane'}

            // Act
            result = dbService.update(id, data)

            //Assert
            assert.strictEqual(result, false)
        })
        it("Doit retourner false : password incorrect", () => {
            // Arrange
            const dbService = new DBService()
            let result = null
            const id = 1
            const data = {login: 'test',
                password: 'aaa',
                mail: 'test@test.fr'}

            // Act
            result = dbService.update(id, data)

            //Assert
            assert.strictEqual(result, false)
        })
    })
})
