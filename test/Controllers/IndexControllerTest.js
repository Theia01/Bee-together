const assert = require('assert')
const IndexController = require("../../app/Controllers/IndexController")

describe("IndexController", ()=>{
    describe("#index", ()=>{
        it("Doit retourner une reponse 'Hello World'", ()=>{
            // Arrange
            const data = 'Hello World'
            const indexController = new IndexController
            let result = null
            const req = { }
            const res = { 
                send: (value)=>{
                    result = value
                }
            }
            
            // Act
            indexController.index(req, res)

            // Assert
            assert.equal(result, data)
        })
    })
})