var path = require("path");
var app = require("express").Router();



// fallback use route for homepage
app.get("/",function(req, res) {
res.sendFile(path.join(__dirname, "../public/home.html"));
});
	// if user enters survey in URL or presses survey button, serves the survey HTML file
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});



module.exports=app;