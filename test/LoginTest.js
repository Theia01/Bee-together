const assert = require('assert')
const Login = require('../app/Login')

describe("Login", () => {
    describe("#login", () => {
        it("Doit retourner false si le champs mail est vide", () => {
            // Arrange
            const login = new Login()
            const mail = ''
            const mdp = '1234aBc.'
            let result = null

            // Act
            result = login.login(mail, mdp)

            // Assert
            assert.strictEqual(result, false)
        })
        it("Doit retourner false si le champs mot de passe est vide", () => {
            // Arrange
            const login = new Login()
            const mail = 'test@test.fr'
            const mdp = ''
            let result = null

            // Act
            result = login.login(mail, mdp)

            // Assert
            assert.strictEqual(result, false)
        })
        it("Doit retourner false si le mail est mauvais", () => {
            // Arrange
            const login = new Login()
            login.data = ['test@test.com', '1234aBc.']
            const mail = 'test@test.fr'
            const mdp = '1234aBc.'
            let result = null

            // Act
            result = login.login(mail, mdp)

            // Assert
            assert.strictEqual(result, false)
        })
        it("Doit retourner false si le mot de passe est mauvais", () => {
            // Arrange
            const login = new Login()
            login.data = ['test@test.com', '1234aBc.']
            const mail = 'test@test.com'
            const mdp = '1234aBe.'
            let result = null

            // Act
            result = login.login(mail, mdp)

            // Assert
            assert.strictEqual(result, false)
        })
        it("Doit retourner true si le mail et le mot de passe sont bons", () => {
            // Arrange
            const login = new Login()
            login.data = ['test@test.com', '1234aBc.']
            const mail = 'test@test.com'
            const mdp = '1234aBc.'
            let result = null

            // Act
            result = login.login(mail, mdp)

            // Assert
            assert.strictEqual(result, true)
        })

    })
})
