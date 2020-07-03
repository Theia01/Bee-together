module.exports = class Register {

    constructor(usedLogin) {
        this.usedLogin = usedLogin
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
        const re = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,30})$/
        if(re.test(password)){
                return true;
        }
        return false
    }

    setUsername(login){
        if (this.usedLogin && !this.usedLogin.includes(login)) {
            if (30 >= login.length && login.length >= 4 && !login.includes(" ")) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }
}
