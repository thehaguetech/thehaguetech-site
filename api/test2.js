const createHandler = require('azure-function-express').createHandler;
const app = require('express')();

app.get("/home", (req, res) => {
    res.json({ "name": "name", "dob": "ddmmyyyy" });
});

app.get("/work", (req, res) => {
    res.json({ "name": req.query.name, "dob": "ddmmyyyy" });
});

module.exports = createHandler(app);