const { createFournisseur, getFournisseurs, updateFournisseur, deleteFournisseur } = require("./fournisseur.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", createFournisseur);
router.get("/", getFournisseurs);
router.patch("/", updateFournisseur);
router.delete("/", deleteFournisseur);

module.exports = router;
