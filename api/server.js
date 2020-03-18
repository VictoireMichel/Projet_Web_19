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


// Tous les produits => par exemple dans l'url => localhost:3000/api/produits
app.get('/api/produits/:id', function (req, res) {
    let id = req.params.id;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    con.query('SELECT * FROM produits where id=?',[id], function (error, results) {
        if (error) throw error;

        res.send(JSON.stringify(results));
    });
});

//Le produit selon ce qui est demandé dans la barre de recherche
app.get('/api/prod', function (req, res) {
    let nom = req.body.nom;
    let origine = req.body.origine;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    con.query('SELECT * FROM produits where nom = ? OR origine = ? OR ',[nom, origine], function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});


// ajouter un produit => par exemple dans l'url => localhost:3000/api/produits
app.post('/api/produits', function (req, res) {

        let nom = req.body.nom;
        let idCat = req.body.idCat;
        let idFourn = req.body.idFourn;
        let origine = req.body.origine;
    con.query('insert into produits(nom, idCat, idFourn, origine) values (?, ?, ?, ?)', [nom, idCat, idFourn, origine], function (error, results) {
        if (error) {console.log('erreurdb');}
        res.send(JSON.stringify(results));
    });
});

//Supprimer un produit sur base de son nom => url => localhost:3000/api/produits
app.delete('/api/produits', function (req, res) {
    let nom = req.body.nom;
    con.query('delete from produits where nom = ? ', [nom], function (error, results) {
        if (error) {console.log('erreurdb');}
        res.send(JSON.stringify(results));
    });
});

//modifier le nom et l'origine d'un produit selon son id=> url => localhost:3000/api/produits
app.put('/api/produits', function (req, res) {
    let id = req.body.id;
    let nom = req.body.nom;
    let origine = req.body.origine;
    con.query('update produits set nom = ? AND origine = ? where id =', [nom, origine, id], function (error, results) {
        if (error) {console.log('erreurdb');}
        res.send(JSON.stringify(results));
    });
});


// Toutes les catégories => par exemple dans l'url => localhost:3000/api/categorie
app.get('/api/categorie', function (req, res) {
    con.query('SELECT * FROM categorie', function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});

// ajouter une catégorie => par exemple dans l'url => localhost:3000/api/categorie
app.post('/api/categorie', function (req, res) {
    let nom = req.body.nom;
    let details = req.body.details;
    con.query('insert into categorie(nom, details) values (?,?)',[nom, details], function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});

// supprimer une catégorie en fonction de son id => par exemple dans l'url => localhost:3000/api/categorie
app.delete('/api/categorie', function (req, res) {
    let id = req.body.id;
    con.query('delete from categorie where idCat = ?',[id], function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify(results));

    });
});



// Tous les utilisateurs => par exemple dans l'url => localhost:3000/api/utilisateurs
app.get('/api/utilisateurs', function (req, res) {
    con.query('SELECT * FROM utilisateurs', function (error, results) {
        if (error) throw error;
        return res.send(JSON.stringify(results));
    });
});
