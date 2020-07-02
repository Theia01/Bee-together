module.exports = class Register {

    constructor() {

    }

    setMail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(String(email).toLowerCase())){
            if(this.usedMails.indexOf(email) < 0){
                return true;
            }
        }
        return false
    }

    setPassword(password) {
        return false
    }

}