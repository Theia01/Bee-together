const assert = require('assert')
const UpdateProfil = require("../app/UpdateProfil")

let updateProfil = null

const dataPseudo = ["John Doe", "Lou", "Romuald"]
const dataMail = ['','pastèque','pastèque@malotrue','pas steak@malotru.com','pasteque@.com', '@steak.com','@.com']
const dataPassword = ['','bob','password','password4!','PassworD33','Password?','PASSWORD4?',
'C00KIE : Anciennement petit gâteau sucré, qu’on acceptait avec plaisir. Aujourd’hui : petit fichier informatique drôlement salé, qu’il faut refuser avec véhémence.']

describe("UpdateProfil", ()=>{
    beforeEach(()=>{
        // Arange
        updateProfil = new UpdateProfil
    })

    describe("#updatePseudo", ()=>{

        it("Doit retourner false, pseudo déjà utilisé", () => {
            // Arrange
            const login = "Fleur"
            updateProfil.usedLogin = dataPseudo
            let result = null

            // Act
            result = updateProfil.updatePseudo(login)

            // Assert
            assert.strictEqual(result,false)
        })

        it("Doit relever une erreur si le pseudo n'est pas definie", ()=>{
            // Arrange
            const pseudo = dataPseudo[0]
            let res = false

            // Act
            try {
                updateProfil.updatePseudo(pseudo)
            } catch (error) {
                res = true
            }

            // Assertion
            assert.equal(res, true)
        })

        it("Doit rendre true si le pseudo a bien été modifié", ()=>{
            // Act
            const res = updateProfil.updatePseudo()

            // Assertion
            assert.equal(res, true)
        })

    })

    describe("#updateMail", ()=>{

        dataMail.forEach(element => {
            it("Doit retourner false", () => {
                // Arrange
                let result = null
    
                // Act
                result = updateProfil.updateMail(element)
    
                // Assert
                assert.strictEqual(result,false)
            })
        });

        it("Doit retourner false (mail déjà utilisé)", () => {
            // Arrange
            const mail = "johdel390@gmail.com"
            updateProfil.usedMails = ["noidea@laposte.net","johdel390@gmail.com","pasteque@hotmail.fr"]
            let result = null

            // Act
            result = updateProfil.setMail(mail)

            // Assert
            assert.strictEqual(result,false)
        })

        it("Doit relever une erreur si le mail n'est pas definie", ()=>{
            // Arrange
            let res = false

            // Act
            try {
                updateProfil.updateMail()
            } catch (error) {
                res = true
            }

            // Assertion
            assert.equal(res, true)
        })

        it("Doit rendre true si le mail a bien été modifier", ()=>{
            //Arrange
            let mail = dataMail[0]
            
            // Act
            const res = updateProfil.updateMail(mail)

            // Assertion
            assert.equal(res, true)
        })
        
    })

    describe("#updatePassword", ()=>{
        
        dataPassword.forEach(element => {
            it("Doit retourner false", () => {
                // Arrange
                let result = null

                // Act
                result = updateProfil.updatePassword(element)
    
                // Assert
                assert.strictEqual(result,false)
            })
        })

        it("Doit relever une erreur si le password n'est pas definie", ()=>{
            // Arrange
            let res = false

            // Act
            try {
                updateProfil.updatePassword()
            } catch (error) {
                res = true
            }

            // Assertion
            assert.equal(res, true)
        })

        it("Doit rendre true si le password a bien été modifier", ()=>{
            // Arrange
            const password = "H1bern@TIon"
            
            // Act
            const res = updateProfil.updatePassword(password)

            // Assertion
            assert.equal(res, true)
        })
        
    })
})
