const { createProduit, getProduits, getProduitsAll, updateProduit, deleteProduit } = require("./produit.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createProduit);
router.post("/get", getProduits);
router.get("/all", getProduitsAll);
router.patch("/", updateProduit);
router.delete("/", checkToken, deleteProduit);

module.exports = router;
