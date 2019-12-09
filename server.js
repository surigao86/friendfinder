// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var api =require("./app/routing/apiRoutes");
var html =require("./app/routing/htmlRoute");

var app = express();

var PORT = process.env.PORT || 8080;

// For serving of static CSS
app.use(express.static(__dirname + "/app"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(api);
app.use(html);

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});