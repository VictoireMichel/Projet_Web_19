const { createUtilisateur, getUtilisateurByUtilisateurId, getUtilisateurs, updateUtilisateur, deleteUtilisateur, login } = require("./utilisateur.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createUtilisateur);
router.get("/", checkToken, getUtilisateurs);
router.get("/:id", checkToken, getUtilisateurByUtilisateurId);
router.patch("/", checkToken, updateUtilisateur);
router.delete("/", checkToken, deleteUtilisateur);
router.post("/login", login);

module.exports = router;
