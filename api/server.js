//////////////////////////CREATION DU SERVEUR/////////////////////////////////////////////////////////////////////////////////////

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});

// set port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});

module.exports = app;

//////////////////////////CONNEXION A LA BASE DE DONNEES/////////////////////////////////////////////////////////////////////////////////////

const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "user1234",
    database: "prototype_web",
});


con.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    //let sql = "insert into categorie(nom, details) values ('viande', 'pure')";
    let sql = "select * from categorie";
    con.query(sql , (error, result) => {
        if(error){
            return console.error(error.message);
        }
        console.log(result);
    });

    console.log('Connected to the MySQL server.');

});

//////////////////////////REQUÊTES/////////////////////////////////////////////////////////////////////////////////////


// Toutes les catégories => par exemple dans l'url => localhost:3000/categorie
app.get('/categorie', function (req, res) {
    con.query('SELECT * FROM categorie', function (error, results) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'cat list.' });
    });
});

// Tous les produits => par exemple dans l'url => localhost:3000/produits
app.get('/produits', function (req, res) {
    con.query('SELECT * FROM produits', function (error, results) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'prod list.' });
    });
});

// ajouter une catégorie => par exemple dans l'url => localhost:3000/addcat
app.get('/addcat', function (req, res) {
    con.query('insert into categorie(nom, details) values (\'pate\', \'fraiche\')', function (error, results) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'add cat.' });
    });
});

// supprimer une catégorie => par exemple dans l'url => localhost:3000/delcat
app.get('/delcat', function (req, res) {
    con.query('delete from categorie where idCat = 3', function (error, results) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'del cat' });
    });
});