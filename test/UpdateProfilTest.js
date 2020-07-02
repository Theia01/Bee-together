const assert = require('assert')
const UpdateProfil = require("../app/UpdateProfil")

let updateProfil = null
const list = [
    {pseudo : "John Doe",
    mail : "john.doe@gmail.com",
    password : "Azerty123!"},

    {pseudo : "Mireille Doe",
    mail : "mireille.doe@gmail.com",
    password : "#N3rv3rDr3am"},

    {pseudo : "Jasmine Doe",
    mail : "jasmine67",
    password : "motdepasse"},
]
//mpd => mini : 8caractère, max : 30, min 
describe("UpdateProfil", ()=>{
    beforeEach(()=>{
        // Arange
        updateProfil = new UpdateProfil
    })

    describe("#updatePseudo", ()=>{

        it("Doit relever une erreur si le pseudo n'est pas definie", ()=>{
            // Arrange
            const pseudo = 'michel'
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

        it("Doit vérifier que la méthode _verifyIfIsMail est appelée", ()=>{
            //Arrange
            let res = false

            //Act
            updateProfil._verifyIfIsMail = function(){
                res = true
            }
            updateProfil.updateMail(list[0].mail);

            //Assert
            assert.equal(res, true)
        })

        it("Doit vérifier que le mail est passé dans la méthode _verifyIfIsMail", ()=>{
            //Arrange
            const mail = list[0].mail
            let res = false

            //Act
            updateProfil._verifyIfIsMail = function(value){
                res = true

                // Assert
                assert.equal(value, mail)
            }
            updateProfil.updateMail(mail);

            //Assert
            assert.equal(res, true)
        })
       
        it("Doit retouner une Erreur si le mail passé dans la méthode _verifyIfIsMail n'est pas un réel mail", ()=>{
            //Arrange
            const mail = list[2].mail
            let res = false

            // Act
            try {
                updateProfil.updateMail(mail)
            } catch (error) {
                res = true
            }

            //Assert
            assert.equal(res, true)
        })

        it("Doit rendre true si le mail a bien été modifier", ()=>{
            // Act
            const res = updateProfil.updateMail()

            // Assertion
            assert.equal(res, true)
        })
        
    })

    describe("#updatePassword", ()=>{

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
            // Act
            const res = updateProfil.updatePassword()

            // Assertion
            assert.equal(res, true)
        })
        
    })
})
