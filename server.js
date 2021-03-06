var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js")

var port = 8080 || process.env.PORT;

var app = express();

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false}));

app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

app.use("/", routes);

app.listen(port, function() {
  console.log("LISTENING AT PORT: " + port)
});
