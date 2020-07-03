module.exports = class ApiController {
    constructor(db) {
        this._db = db
    }
    
    /**
     * URL /api/collection
     */
    all(req, res) {
        res.send({ result: 'ok', data: this._db.getAll() })
    }
    /**
     * URL /api/collection/?store=DATA
     */
    store() { }
     /**
     * URL /api/collection/?search=DATA
     */
    search() { }
}