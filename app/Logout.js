module.exports = class Logout {
    constructor(session) {
        Logout.logout(session)
    }

    static logout(session) {
        if (session.logged === true) {
            return true;
            // déconnecter l'utilisateur ici
        } else {
            throw ("Vous n'êtes pas connecté.");
            // renvoyer un message d'erreur : l'utilisateur n'est pas connecté
        }
    }
};
