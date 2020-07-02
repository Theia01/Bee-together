const assert = require('assert')
const ForgotPassword = require('../app/ForgotPassword')

let forgotPassword = null;
describe("forgotPassword", () => {

    describe("#verifMail", () => {
        beforeEach(() => {
            forgotPassword = new ForgotPassword
            forgotPassword.mails = ["lucas.maillard@imie.fr","camille.naulet@hotmail.fr","johdel390@gmail.com"]
            let result = null
        })

        it("true : l'email existe", () => {
            // Arrange
            const mail = "lucas.maillard@imie.fr"

            // Act
            result = forgotPassword.verifMail(mail)

            // Assert
            assert.strictEqual(result,true)
        })

        it("false : Le compte (l'email) n'existe pas", () => {
            // Arrange
            const mail = "jeanmichdu92@outcook.de"

            // Act
            result = forgotPassword.verifMail(mail)

            // Assert
            assert.strictEqual(result,false)
        })


    })
})
