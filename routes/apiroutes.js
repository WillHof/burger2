const path = require("path");
const db = require("../models")
module.exports = function (app) {
    app.post("/api/newBurger", function (req, res) {
        console.log(req.body)
        db.burgers.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        }).then(function (dbPost) {
            res.json(dbPost);
        })
    })
    app.get("/api/burgers", function (req, res) {
        db.burgers.findAll({}).then(function (dbPost) {
            res.json(dbPost)
        })
    })
}