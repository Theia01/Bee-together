const assert = require('assert')
const ForgotPassword = require('../app/ForgotPassword')

const data = ['lucas.maillard@imie.fr','camille.naulet@hotmail.fr','johdel390@gmail.com', 'jeanmichdu92@outcook.de']
let forgotPassword = null;
describe("forgotPassword", () => {

    describe("#verifMail", () => {
        beforeEach(() => {
            forgotPassword = new ForgotPassword
        })

        data.forEach(element => {
            it("NULL", () => {
                // Arrange
                let result = null
    
                // Act
                result = forgotPassword.verifMail(element)
    
                // Assert
                assert.strictEqual(result,false)
            })
        });

        it("true : l'email existe", () => {
            // Arrange
            const mail = "lucas.maillard@imie.fr"
            forgotPassword.mails = ["lucas.maillard@imie.fr","camille.naulet@hotmail.fr","johdel390@gmail.com"]
            let result = null

            // Act
            result = forgotPassword.verifMail(mail)

            // Assert
            assert.strictEqual(result,true)
        })

        it("false : Le compte (l'email) n'existe pas", () => {
            // Arrange
            const mail = "jeanmichdu92@outcook.de"
            forgotPassword.mails = ["lucas.maillard@imie.fr","camille.naulet@hotmail.fr","johdel390@gmail.com"]
            let result = null

            // Act
            result = forgotPassword.verifMail(mail)

            // Assert
            assert.strictEqual(result,false)
        })


    })
})
