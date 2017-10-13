var jsontufile = require('json-tu-file'),
    jsonfile = require('jsonfile'),
    path = require("path"),
    pathJson = path.join('/home/jflores/Web2017/express.js-nodeJS/', 'model'),
    file = path.join(pathJson, 'data.json'),
    listNotes = [];

const deletedNotes = (req, res, next) => {
    listNotes = jsonfile.readFileSync(file);
    for (var i = listNotes.length - 1; i >= 0; i--) {
        if (listNotes[i].id == req.body.id) {
            listNotes.splice(i, 1);
        }
    }
    jsonfile.writeFileSync(file, listNotes);
    res.redirect('/listNotePage')
}

const renderPageNotes = (req, res, next) => {
    res.render('notes')
    next();
}

const viewNotes = (req, res, next) => {
    listNotes = jsonfile.readFileSync(file);
    res.render('list', {
        list: listNotes
    });
}

const readController = (req, res, next) => {
    res.render('index');
}
const addController = (req, res, next) => {
    listNotes = jsonfile.readFileSync(file);
    let note = req.body.note,
        title = req.body.title,
        date = new Date().toLocaleDateString('en-US');

    listNotes.push({
        id: listNotes.length + 1,
        title: title,
        date: date,
        note: note
    })

    jsonfile.writeFileSync(file, listNotes);
    res.redirect('/')
}

module.exports = {
    readController,
    addController,
    renderPageNotes,
    viewNotes,
    deletedNotes
}