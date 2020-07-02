module.exports = class UpdateProfil {

    constructor() {

    }

    updatePseudo(pseudo){
        if(pseudo !== undefined){
            if(this.usedLogin.indexOf(pseudo) < 0){
                return true;
            }
            }
            else{
                throw new Error
            }
        return false // La case pseudo n'est pas remplie
    }

    updateMail(email) {
        if(email !== undefined){
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(re.test(String(email).toLowerCase())){
            if(this.usedMails.indexOf(email) < 0){
                    return true;
                }
            }
        }
        else {
            throw new Error
        }
        return false
    }


    updatePassword(password) {
        if (password !== undefined){

            const re = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,30})$/
            if(re.test(password)){
                return true;
        }
        }
    else {
        throw new Error
    }
        return false
    }
}