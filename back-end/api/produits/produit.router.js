const { createProduit, getProduits, updateProduit, deleteProduit } = require("./produit.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createProduit);
router.get("/", checkToken, getProduits);
router.patch("/", checkToken, updateProduit);
router.delete("/", checkToken, deleteProduit);

module.exports = router;
