//////////////////////////CREATION DU SERVEUR///////////////////////////////////////////////////////////////////////////////////////////////


const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// route par défaut
app.get('/', function (req, res) {
    return res.send('hello');
});

// affectation du port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});

module.exports = app;

//////////////////////////CONNEXION A LA BASE DE DONNEES/////////////////////////////////////////////////////////////////////////////////////

const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "florent200399",
    database: "webDB_proto",
});


con.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');

});



//////////////////////////REQUÊTES///////////////////////////////////////////////////////////////////////////////////////////////////////////


// Toutes les catégories => par exemple dans l'url => localhost:3000/categorie
app.get('/categorie', function (req, res) {
    con.query('SELECT * FROM categorie', function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});

// Tous les produits => par exemple dans l'url => localhost:3000/produits
app.get('/produits', function (req, res) {
    con.query('SELECT * FROM produits', function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});


// ajouter une catégorie => par exemple dans l'url => localhost:3000/addcat
app.get('/addcat', function (req, res) {
    con.query('insert into categorie(nom, details) values (\'pate\', \'fraiche\')', function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});

// supprimer une catégorie => par exemple dans l'url => localhost:3000/delcat
app.get('/delcat', function (req, res) {
    con.query('delete from categorie where idCat = 9', function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify(results));

    });
});

// Tous les users => par exemple dans l'url => localhost:3000/users
app.get('/users', function (req, res) {
    con.query('SELECT * FROM users', function (error, results) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'cat list.' });
    });
});