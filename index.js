var express = require("express");
var app = express();
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.send(`Hello ${req.query.name ? req.query.name : "World!"}`);
});

app.listen(port, function() {
    console.log(`Example app listening on port ${port}`);
});
