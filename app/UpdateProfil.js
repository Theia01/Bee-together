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
        if(_verifyIfIsMail(mail)){
            if(this.usedMails.indexOf(email) < 0){
                return true;
            }
        }
        return false
    }


    updatePassword(password){
        if(pseudo !== undefined){
            return true; //prêt à changer
        }

         return false // La case mot de passe n'est pas remplie
     }

     _verifyIfIsMail(mail){
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(mail).toLowerCase());
     }
}