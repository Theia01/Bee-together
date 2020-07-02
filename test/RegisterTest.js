const assert = require('assert')
const Register = require('../app/Register')

const dataMail = ['','pastèque','pastèque@malotrue','pas steak@malotru.com','pasteque@.com', '@steak.com']
const dataPassword = ['','bob','password','password4!','PassworD33','Password?','PASSWORD4?',
'C00KIE : Anciennement petit gâteau sucré, qu’on acceptait avec plaisir. Aujourd’hui : petit fichier informatique drôlement salé, qu’il faut refuser avec véhémence.']
let register = null;
describe("Register", () => {

    describe("#setMail", () => {
        beforeEach(() => {
            register = new Register
        })

        dataMail.forEach(element => {
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

    describe("#setPassword", () => {
        beforeEach(() => {
            register = new Register
        })

        dataPassword.forEach(element => {
            it("Doit retourner false", () => {
                // Arrange
                let result = null
    
                // Act
                result = register.setPassword(element)
    
                // Assert
                assert.strictEqual(result,false)
            })
        })

        it("Doit retourner true", () => {
            // Arrange
            const v_password = "H1bern@TIon"
            let result = null

            // Act
            result = register.setPassword(v_password)

            // Assert
            assert.strictEqual(result,true)
        })
    })
    
})