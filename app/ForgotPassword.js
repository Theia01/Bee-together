module.exports = class ForgotPassword {

    constructor (mails) {
        this.mails = mails
    }

    verifMail(mail) {
        if(this.mails !== undefined) {
            for (let i = 0; i < this.mails.length; i++) {
                if (mail !== this.mails[i]) {
                    return false
                }

                if (mail === this.mails[i]) {
                    return true
                }
            }
        }
    }
}
