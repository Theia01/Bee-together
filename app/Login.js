module.exports = class Login {
    constructor(data) {
        this.data = data
    }

    login(mail, mdp) {
        if (mail.length > 0 && mdp.length > 0) {
            if (this.data.some(i => i.mail.includes(mail))) {
                let pos = this.data.map(function(e) {
                        return e.mail
                    }).indexOf(mail);
                return this.data[pos].password === mdp

            } else {return false}
        } else {return false}
    }
}
