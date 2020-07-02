module.exports = class UpdateProfil {

    constructor() {

    }

    updatePseudo(pseudo){
        if(pseudo !== undefined){
                return true; //prêt à changer
            }
    
        return false // La case pseudo n'est pas remplie
    }

    updateMail(mail){
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(String(email).toLowerCase())){
            if(this.usedMails.indexOf(email) < 0){
                return true;
            }
        }
        return false
    }


    updatePassword(password) {
        const re = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,30})$/
        if(re.test(password)){
                return true;
        }
        return false
    }

}