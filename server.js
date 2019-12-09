// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
var path = require("path");
var express = require("express");
// var bodyParser = require("body_parser");


// EXPRESS CONFIGURATION
// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// LISTENER //
app.listen(PORT, function () {
  console.log("Server is listening on PORT: " + PORT);
});