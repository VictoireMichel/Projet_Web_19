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
    password: "florent200399",
    database: "webDB_proto",
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

//////////////////////////TEST CREATION CATEGORIE LIST/////////////////////////////////////////////////////////////////////////////////////


// Toutes les catégories => par exemple dans l'url => localhost:3000/categorie
app.get('/categorie', function (req, res) {
    con.query('SELECT * FROM categorie', function (error, results) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'cat list.' });
    });
});

// Tous les users => par exemple dans l'url => localhost:3000/users
app.get('/users', function (req, res) {
    con.query('SELECT * FROM users', function (error, results) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'cat list.' });
    });
});
