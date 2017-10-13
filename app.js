// Requires
var express = require('express'),
    path = require("path"),
    routes = require('./routes/routes.js'),
    favicon = require("serve-favicon"),
    bodyParser = require("body-parser"),
    logger = require("morgan");

// configuration values
var faviconURL = __dirname + "/public/img/nodejs.png",
    publicDir = express.static(path.join(__dirname, "public")),
    viewDir = path.join(__dirname, "views"),
    app = express();

// settings
app.set("views", viewDir);
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(express.static('public'));
app.use(favicon(faviconURL));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);





app.listen(app.get('port'), () => {
    console.log('Iniciando servidor en http://localhost:' + app.get('port'));
})