module.exports = class Login {
    constructor() {}

    login(mail, mdp) {
        const users = [
            {"mail": "test@tester.fr", "password": "1234aBc."},
            {"mail": "test@test.com", "password": "1234aBc."}
        ]

        console.log(mail)

        if (mail.length > 0 && mdp.length > 0) { // test 1 & 2
            if (users.some(i => i.mail.includes(mail))) { // test 3
                let pos = users.map(function(e) {
                        return e.mail
                    }).indexOf(mail);
                return users[pos].password === mdp;

            } else {return false}
        } else {return false}
    }
}
