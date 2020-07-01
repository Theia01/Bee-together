const assert = require('assert')
const Register = require('../app/Register')

const data = ['pastèque','pastèque@malotrue','pas steak@malotru.com','pasteque@.com', '@steak.com']
let register = null;
describe("Register", () => {

    describe("#setMail", () => {
        beforeEach(() => {
            register = new Register
        })

        data.forEach(element => {
            it("Doit retourner false", () => {
                // Arrange
                let result = null
    
                // Act
                result = register.setMail(element)
    
                // Assert
                assert.strictEqual(result,false)
            })
        });

        it("Doit retourner false (mail déjà utilisé)", () => {
            // Arrange
            const mail = "johdel390@gmail.com"
            register.usedMails = ["noidea@laposte.net","johdel390@gmail.com","pasteque@hotmail.fr"]
            let result = null

            // Act
            result = register.setMail(mail)

            // Assert
            assert.strictEqual(result,false)
        })

        it("Doit retourner true", () => {
            // Arrange
            const mail = "johdel390@gmail.com"
            register.usedMails = ["noidea@laposte.net","johdel44390@gmail.com","pasteque@hotmail.fr"]
            let result = null

            // Act
            result = register.setMail(mail)

            // Assert
            assert.strictEqual(result,true)
        })


    })
})