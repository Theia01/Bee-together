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
})
