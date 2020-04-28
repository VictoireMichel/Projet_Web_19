
const LocalStrategy   = require('passport-local').Strategy;

const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'user1234'
});

connection.query('USE vidyawxx_build2');

module.exports = function(passport) {


    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        connection.query("select * from users where id = "+id,function(err,rows){
            done(err, rows[0]);
        });
    });

    passport.use('local-signup', new LocalStrategy({
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true
        },
        function(req, email, password, done) {

            connection.query("select * from utilisateurs where email = '"+email+"'",function(err,rows){
                console.log(rows);
                console.log("above row object");

                if (err)
                    return done(err);
                if (rows.length) {
                    return done(null, false, req.flash('signupMessage', 'email déjà utilisé.'));
                } else {

                    var newUserMysql = new Object();

                    newUserMysql.email    = email;
                    newUserMysql.password = password;

                    var insertQuery = "INSERT INTO utilisateurs ( email, password ) values ('" + email +"','"+ password +"')";
                    console.log(insertQuery);
                    connection.query(insertQuery,function(err,rows){
                        newUserMysql.id = rows.insertId;

                        return done(null, newUserMysql);
                    });
                }
            });
        }));

    passport.use('local-login', new LocalStrategy({
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true
        },
        function(req, email, password, done) {

            connection.query("SELECT * FROM `users` WHERE `email` = '" + email + "'",function(err,rows){
                if (err)
                    return done(err);
                if (!rows.length) {
                    return done(null, false, req.flash('loginMessage', 'Utilisateur non existant.'));
                }

                if (!( rows[0].password == password))
                    return done(null, false, req.flash('loginMessage', 'Mauvais mot de passe.'));

                return done(null, rows[0]);

            });

        }));

};
