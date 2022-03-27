const express = require("express");
const { addCharacterDetail } = require("../Controllers/characterDetail");
const characterDetailRouter = express.Router();

characterDetailRouter.post("/addCharacterDetail", addCharacterDetail);

module.exports = characterDetailRouter;
