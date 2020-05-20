const { createUtilisateur, getUtilisateurByUtilisateurId, getUtilisateurs, updateUtilisateur, deleteUtilisateur, getUtilisateurByUtilisateurEmail } = require("./utilisateur.service");

const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const Cookies = require( "cookies" );

module.exports = {
    createUtilisateur: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.mdp = hashSync(body.mdp, salt);
        createUtilisateur(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "erreur de connexion à la base de données"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getUtilisateurByUtilisateurId: (req, res) => {
        const id = req.params.id;
        getUtilisateurByUtilisateurId(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "données non trouvées"
                });
            }
            return res.json({
                success: 1,
                data: results
            })
        });
    },
    getUtilisateurs: (req, res) => {
        getUtilisateurs((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    updateUtilisateur: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.mdp = hashSync(body.mdp, salt);
        updateUtilisateur(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "échec mise à jour de l'utilisateur"
                });
            }
            return res.json({
                success: 1,
                message: "mise à jour réussie"
            });
        });
    },
    deleteUtilisateur: (req, res) => {
        const data = req.query;
        deleteUtilisateur(data, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "données non trouvées"
                });
            }
            return res.json({
                success: 1,
                message: "utilisateur supprimé avec succès"
            });
        });
    },
    login: (req, res) => {
        const body = req.body;
        getUtilisateurByUtilisateurEmail(body.email, (err, results) => {
            if (err) {
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    data: "email ou mot de passe non valide"
                });
            }
            const result = compareSync(body.mdp, results.mdp);
            if (result) {
                results.mdp = undefined;
                const jsontoken = sign({ result : results }, process.env.CLE_TOKEN, {
                    expiresIn: "1h"
                });
                new Cookies(req,res).set('access_token', jsontoken, {
                    httpOnly: true,
                    secure: false,
                    domain: "https://idlunch-e11a5.web.app/admin"
                });
                return res.json({
                    success: 1,
                    message: "connecté avec succès",
                    token: jsontoken
                });
            } else {
                return res.json({
                    success: 0,
                    data: "email ou mot de passe non valide"
                });
            }
        });
    }
};
