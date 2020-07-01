const assert = require('assert');
const Logout = require('../app/Logout');

let logout = null;
describe("Logout", () => {
    describe("#logout", () => {
        it("User is connected, must logout", () => {
            const session = {"logged": true};

            let result = Logout.logout(session);

            assert.strictEqual(result, true)
        });

        it("User is not connected, must return an error", () => {
            const session = {"logged": false};

            try {
                Logout.logout(session);
            }
            catch (e) {
                assert.equal(e, "Vous n'êtes pas connecté.")
            }
        });
    })
});
