const { createCategorie, getCategories, updateCategorie, deleteCategorie } = require("./categorie.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", createCategorie);
router.get("/", getCategories);
router.patch("/", updateCategorie);
router.delete("/", deleteCategorie);

module.exports = router;
