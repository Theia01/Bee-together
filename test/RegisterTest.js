const assert = require('assert')
const Register = require('../app/Register')

const dataMail = ['','pastèque','pastèque@malotrue','pas steak@malotru.com','pasteque@.com', '@steak.com','@.com']
const dataPassword = ['','bob','password','password4!','PassworD33','Password?','PASSWORD4?',
'C00KIE : Anciennement petit gâteau sucré, qu’on acceptait avec plaisir. Aujourd’hui : petit fichier informatique drôlement salé, qu’il faut refuser avec véhémence.']
const dataLogin = ['','a','az','aze','azertyuiopqsdfghjklmwxcvbnazert','azertyuiopqsdfghjklmwxcvbnazerty','no SPACE']
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

    describe("#setUsename", () => {
        beforeEach(() => {
            register = new Register
        })

        dataLogin.forEach(element => {
            it("Doit retourner false", () => {
                // Arrange
                let result = null
    
                // Act
                result = register.setUsername(element)
    
                // Assert
                assert.strictEqual(result,false)
            })
        })

        it("Doit retourner true", () => {
            // Arrange
            const v_login = "nobodycantakemyusername"
            register.usedLogin = ["snifnoidea","hiimnobody","onestdestubesonestpasdespots"]
            let result = null

            // Act
            result = register.setUsername(v_login)

            // Assert
            assert.strictEqual(result,true)
        })

        it("Doit retourner false, pseudo déjà utilisé", () => {
            // Arrange
            const v_login = "snifnoidea"
            register.usedLogin = ["snifnoidea","hiimnobody","onestdestubesonestpasdespots"]
            let result = null

            // Act
            result = register.setUsername(v_login)

            // Assert
            assert.strictEqual(result,false)
        })

    })

    
})