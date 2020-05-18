const { createUtilisateur, getUtilisateurByUtilisateurId, getUtilisateurs, updateUtilisateur, deleteUtilisateur, login } = require("./utilisateur.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", createUtilisateur);
router.get("/", getUtilisateurs);
router.get("/:id", getUtilisateurByUtilisateurId);
router.patch("/", updateUtilisateur);
router.delete("/", deleteUtilisateur);
router.post("/login", login);

module.exports = router;
