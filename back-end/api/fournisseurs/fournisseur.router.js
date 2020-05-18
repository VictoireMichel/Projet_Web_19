const { createFournisseur, getFournisseurs, updateFournisseur, deleteFournisseur } = require("./fournisseur.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createFournisseur);
router.get("/", getFournisseurs);
router.patch("/", checkToken, updateFournisseur);
router.delete("/", checkToken, deleteFournisseur);

module.exports = router;
