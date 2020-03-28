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


// Tous les produits => par exemple dans l'url => localhost:3000/v1/api/produits
app.get('/v1/api/produits', function (req, res) {
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
        if (error) {console.log(error.message);}
        res.send(JSON.stringify(results));
    });
});

// ajouter un produit => par exemple dans l'url => localhost:3000/v1/api/produits
app.post('/v1/api/produits', function (req, res) {
    res.setHeader('Content-Type','application/json; charset=utf-8');
    con.query('insert into produits (nom, idCat, idFourn, origine) values (?, ?, ?, ?)',[req.body.nom, req.body.categorie, req.body.fournisseur, req.body.origine], function (error, results) {
        if (error) {console.log(error.message);}
        res.send(JSON.stringify(results));
    });
});

//Supprimer un produit sur base de son id => url => localhost:3000/v1/api/produits
app.delete('/v1/api/produits', function (req, res) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    con.query('delete from produits where id = ' + req.query.id,function (error, results) {
        if (error) {console.log(error.message);}
        res.send(JSON.stringify(results));
    });
});

//modifier le nom et l'origine d'un produit selon son id=> url => localhost:3000/v1/api/produits
app.put('/v1/api/produits', function (req, res) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    con.query('update produits set nom = ? , origine = ?  where id = ' + req.query.id,[req.body.nom, req.body.origine], function (error, results) {
        if (error) {console.log(error.message);}
        res.send(JSON.stringify(results));
    });
});


// Toutes les catégories => par exemple dans l'url => localhost:3000/v1/api/categorie
app.get('/v1/api/categories', function (req, res) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    con.query('SELECT * FROM categories',function (error, results) {
        if (error) {console.log(error.message);}
        res.send(JSON.stringify(results));
    });
});

// ajouter une catégorie => par exemple dans l'url => localhost:3000/v1/api/categorie
app.post('/v1/api/categories', function (req, res) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    con.query('insert into categories (nom, details) values (?,?)',[req.body.nom, req.body.details], function (error, results) {
        if (error) {console.log(error.message);}
        res.send(JSON.stringify(results));
    });
});

//Modifier une categorie
app.put('/v1/api/categories', function (req, res) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    con.query('update categories set nom = ? AND details = ? where id = ' + req.query.id,[req.body.nom, req.body.details], function (error, results) {
        if (error) {console.log(error.message);}
        res.send(JSON.stringify(results));
    });
});

// supprimer une catégorie en fonction de son id => par exemple dans l'url => localhost:3000/v1/api/categorie
app.delete('/v1/api/categories', function (req, res) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    con.query('delete from categories where id = ' + req.query.id,function (error, results) {
        if (error) {console.log(error.message);}
        res.send(JSON.stringify(results));
    });
});

//Tous les fournisseurs
app.get('/v1/api/fournisseurs', function (req, res) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    con.query('SELECT * FROM fournisseurs ',function (error, results) {
        if (error) {console.log(error.message);}
        res.send(JSON.stringify(results));
    });
});

//Ajouter un fournisseur
app.post('/v1/api/fournisseurs', function (req, res) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    con.query('insert into fournisseurs (nom, adresse, idCat) values (?, ?, ?)',[req.body.nom, req.body.adresse, req.body.idCat], function (error, results) {
        if (error) {console.log(error.message);}
        res.send(JSON.stringify(results));
    });
});

//Modifier un fournisseur
app.put('/v1/api/fournisseurs', function (req, res) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    con.query('update fournisseurs set nom = ? AND adresse = ? where id = ' + req.query.id,[req.body.nom, req.body.adresse], function (error, results) {
        if (error) {console.log(error.message);}
        res.send(JSON.stringify(results));
    });
});

//Supprimer un fournisseur
app.delete('/v1/api/fournisseurs', function (req, res) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    con.query('delete from fournisseurs where id= ' + req.query.id,function (error, results) {
        if (error) {console.log(error.message);}
        res.send(JSON.stringify(results));
    });
});

// Tous les utilisateurs => par exemple dans l'url => localhost:3000/api/utilisateurs
app.get('/v1/api/utilisateurs', function (req, res) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    con.query('SELECT * FROM utilisateurs', function (error, results) {
        if (error) {console.log(error.message);}
        return res.send(JSON.stringify(results));
    });
});

//Ajouter un utilisateur
app.post('/v1/api/utilisateurs', function (req, res) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    con.query('insert into utilisateurs (pseudo, mdp, email, adresse, telephone) values (?, ?, ?, ?, ?)', [req.body.pseudo, req.body.mdp, req.body.email, req.body.adresse, req.body.telephone], function (error, results) {
        if (error) {console.log(error.message);}
        res.send(JSON.stringify(results));
    });
});

//Modifier un utilisateur
app.put('/v1/api/utilisateurs', function (req, res) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    con.query('update utilisateurs set pseudo = ? AND mdp = ? AND email = ? AND adresse = ? AND telephone = ? where id = ' + req.query.id, [req.body.pseudo, req.body.mdp, req.body.email, req.body.adresse, req.body.telephone], function (error, results) {
        if (error) {console.log(error.message);}
        res.send(JSON.stringify(results));
    });
});

//Supprimer un utilisateur
app.delete('/v1/api/utilisateurs', function (req, res) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    con.query('delete from utilisateurs where id = ' + req.query.id,function (error, results) {
        if (error) {console.log(error.message);}
        res.send(JSON.stringify(results));
    });
});
