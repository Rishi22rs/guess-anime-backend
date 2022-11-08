const express = require("express");
const {
  addCharacterDetail,
  getRandomCharactar,
  checkAnswer,
} = require("../Controllers/characterDetail");
const characterDetailRouter = express.Router();

characterDetailRouter.post("/addCharacterDetail", addCharacterDetail);
characterDetailRouter.post("/getRandomCharactar", getRandomCharactar);
characterDetailRouter.post("/checkAnswer", checkAnswer);

module.exports = characterDetailRouter;
