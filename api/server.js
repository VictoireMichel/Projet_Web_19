//////////////////////////CREATION DU SERVEUR//////////////////////////////////////////////////////////////////////////////////////////////////////


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// route par défaut
app.get('/', function (req, res) {
    res.send('hello');
});

// affectation du port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});



module.exports = app;

//////////////////////////CONNEXION A LA BASE DE DONNEES////////////////////////////////////////////////////////////////////////////////////////////

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
    console.log('Connected to the MySQL server.');

});



//////////////////////////REQUÊTES/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Toutes les catégories => par exemple dans l'url => localhost:3000/api/categorie
app.get('/api/categorie', function (req, res) {
    con.query('SELECT * FROM categorie', function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});

// Tous les produits => par exemple dans l'url => localhost:3000/api/produits
app.get('/api/produits', function (req, res) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    con.query('SELECT * FROM produits', function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});

// ajouter un produit => par exemple dans l'url => localhost:3000/api/ajoutProduits
app.post('/api/ajoutProduits', function (req, res) {
        let nom = req.body.nom;
        let idCat = req.body.idCat;
        let idFourn = req.body.idFourn;
        let origine = req.body.origine;
    con.query('insert into produits(nom, idCat, idFourn, origine) values (?, ?, ?, ?)', [nom, idCat, idFourn, origine], function (error, results) {
        if (error) {console.log('erreurdb');}
        res.send(JSON.stringify(results));
    });
});


// ajouter une catégorie => par exemple dans l'url => localhost:3000/api/ajoutCategorie
app.get('/api/ajoutCategorie', function (req, res) {
    con.query('insert into categorie(nom, details) values (\'pate\', \'fraiche\')', function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});

// supprimer une catégorie => par exemple dans l'url => localhost:3000/api/supprimerCategorie
app.get('/api/supprimerCategorie', function (req, res) {
    con.query('delete from categorie where idCat = 9', function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify(results));

    });
});

// Tous les users => par exemple dans l'url => localhost:3000/api/utilisateurs
app.get('/api/utilisateurs', function (req, res) {
    con.query('SELECT * FROM utilisateurs', function (error, results) {
        if (error) throw error;
        return res.send(JSON.stringify(results));
    });
});
