const assert = require('assert')
const ApiController = require('../../app/controllers/ApiController')

describe("ApiController", () => {
    describe("#all", () => {
        it("Doit retourner une liste vide", () => {
            //Arrange
            const data = []
            const db = {
                getAll: () => { return data }
            }

            const apiController = new ApiController(db)
            let result = null

            const req = { }
            const res = {
                send: value => {
                    // { result: 'ok', data: [ ] }

                    result = value
                }
            }
            //Act
            apiController.all(req, res)

            //Assert
            assert.equal(result.result, 'ok')
            assert.equal(JSON.stringify(result.data), JSON.stringify(data))

        })

        it("Doit retourner une liste vide avec 2 entrées", () => {
              //Arrange
            const data = ['value 1', 'value 2']
            const db = {
                getAll: () => { return data }
            }

            const apiController = new ApiController(db)
            let result = null

            const req = { }
            const res = {
                send: value => {
                    // { result: 'ok', data: [ 'value 1', 'value 2' ] }

                    result = value
                }
            }
            //Act
            apiController.all(req, res)

            //Assert
            assert.equal(result.result, 'ok')
            assert.equal(result.data.length, 2)

        })
    })

    describe("#store", () => {
        it("Doit ajouter une nouvelle donnée dans la collection", () => {
            
        })

        it("Doit retourner une erreur si pas de donnée donnée dans l'url", () => {

        })
    })
})
