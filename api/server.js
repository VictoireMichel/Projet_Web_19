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
app.get('/api/produits', function (req, res) {
    let id = req.params.id;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    con.query('SELECT produits.id,\n' +
        '       produits.nom,\n' +
        '       categories.nom as categorie,\n' +
        '       categories.details as details,\n' +
        '       fournisseurs.nom as fournisseur,\n' +
        '       produits.origine\n' +
        'FROM produits\n' +
        '    join categories\n' +
        '        on produits.idCat = categories.idCat \n' +
        '    join fournisseurs\n' +
        '        on produits.idFourn = fournisseurs.idFourn ', function (error, results) {
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
        let idCat = req.body.categorie;
        let idFourn = req.body.fournisseur;
        let origine = req.body.origine;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    con.query('insert into produits (nom, idCat, idFourn, origine) values (?, ?, ?, ?)', [nom, idCat, idFourn, origine], function (error, results) {
        if (error) {console.log('erreurdb');}
        res.send(JSON.stringify(results));
    });
});

//Supprimer un produit sur base de son id => url => localhost:3000/api/produits
app.delete('/api/produits', function (req, res) {
    console.log("here");
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    con.query('delete from produits where id = ' + req.query.id, function (error, results) {
        if (error) {console.log('erreurdb');}
        res.send(JSON.stringify(results));
    });
});




//modifier le nom et l'origine d'un produit selon son id=> url => localhost:3000/api/produits
app.put('/api/produits', function (req, res) {
    let id = req.body.id;
    let nom = req.body.nom;
    let origine = req.body.origine;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    con.query('update produits set nom = ? AND origine = ? where id = ?', [nom, origine, id], function (error, results) {
        if (error) {console.log('erreurdb');}
        res.send(JSON.stringify(results));
    });
});


// Toutes les catégories => par exemple dans l'url => localhost:3000/api/categorie
app.get('/api/categories', function (req, res) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    con.query('SELECT * FROM categories', function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});

// ajouter une catégorie => par exemple dans l'url => localhost:3000/api/categorie
app.post('/api/categories', function (req, res) {
    let nom = req.body.nom;
    let details = req.body.details;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    con.query('insert into categories (nom, details) values (?,?)',[nom, details], function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});

//Modifier une categorie
app.put('/api/categories', function (req, res) {
    let idCat = req.body.idCat;
    let nom = req.body.nom;
    let details = req.body.details;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    con.query('update categories set nom = ? AND details = ? where id = ?', [nom, details, idCat], function (error, results) {
        if (error) {console.log('erreurdb');}
        res.send(JSON.stringify(results));
    });
});

// supprimer une catégorie en fonction de son id => par exemple dans l'url => localhost:3000/api/categorie
app.delete('/api/categories', function (req, res) {
    let id = req.body.id;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    con.query('delete from categories where idCat = ?',[id], function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify(results));

    });
});

//Tous les fournisseurs
app.get('/api/fournisseurs', function (req, res) {

    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    con.query('SELECT * FROM fournisseurs ', function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});

//Ajouter un fournisseur
app.post('/api/fournisseurs', function (req, res) {

    let nom = req.body.nom;
    let idFourn = req.body.idFourn;
    let adresse = req.body.adresse;
    let idCat = req.body.idCat;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    con.query('insert into fournisseurs(idFourn, nom, adresse, idCat) values (?, ?, ?, ?)', [idFourn, nom, adresse, idCat], function (error, results) {
        if (error) {console.log('erreurdb');}
        res.send(JSON.stringify(results));
    });
});

//Modifier un fournisseur
app.put('/api/fournisseurs', function (req, res) {
    let nom = req.body.nom;
    let idFourn = req.body.idFourn;
    let adresse = req.body.adresse;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    con.query('update fournisseurs set nom = ? AND adresse = ? where idFourn = ?', [nom, adresse, idFourn], function (error, results) {
        if (error) {console.log('erreurdb');}
        res.send(JSON.stringify(results));
    });
});

//Supprimer un fournisseur
app.delete('/api/fournisseurs', function (req, res) {
    let idFourn = req.body.idFourn;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    con.query('delete from fournisseurs where idFourn = ?',[idFourn], function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify(results));

    });
});

// Tous les utilisateurs => par exemple dans l'url => localhost:3000/api/utilisateurs
app.get('/api/utilisateurs', function (req, res) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    con.query('SELECT * FROM utilisateurs', function (error, results) {
        if (error) throw error;
        return res.send(JSON.stringify(results));
    });
});

//Ajouter un utilisateur
app.post('/api/utilisateurs', function (req, res) {

    let pseudo = req.body.pseudo;
    let mdp = req.body.mdp;
    let email = req.body.email;
    let adresse = req.body.adresse;
    let telephone = req.body.telephone;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    con.query('insert into utilisateurs (pseudo, mdp, email, adresse, telephone) values (?, ?, ?, ?, ?)', [pseudo, mdp, email, adresse, telephone], function (error, results) {
        if (error) {console.log('erreurdb');}
        res.send(JSON.stringify(results));
    });
});

//Modifier un utilisateur
app.put('/api/utilisateurs', function (req, res) {
    let idUser = req.body.idUser;
    let pseudo = req.body.pseudo;
    let mdp = req.body.mdp;
    let email = req.body.email;
    let adresse = req.body.adresse;
    let telephone = req.body.telephone;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    con.query('update utilisateurs set pseudo = ? AND mdp = ? AND email = ? AND adresse = ? AND telephone = ? where idUser = ?', [pseudo, mdp, email, adresse, telephone, idUser], function (error, results) {
        if (error) {console.log('erreurdb');}
        res.send(JSON.stringify(results));
    });
});

//Supprimer un utilisateur
app.delete('/api/utilisateurs', function (req, res) {
    let pseudo = req.body.pseudo;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    con.query('delete from utilisateurs where pseudo = ?',[pseudo], function (error, results) {
        if (error) throw error;
        res.send(JSON.stringify(results));

    });
});
