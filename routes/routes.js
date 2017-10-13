 var express = require('express'),
     routes = express.Router(),
     controller = require('../controllers/controllers.js');

 routes.get('/', controller.readController);
 routes.get('/addNotePage', controller.renderPageNotes);
 routes.post('/deleteNote', controller.deletedNotes);
 routes.get('/listNotePage', controller.viewNotes);
 routes.post('/addNotes', controller.addController);

 module.exports = routes;