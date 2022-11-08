const db = require("../database/db");

exports.addCharacterDetail = (req, res) => {
  let sql = `INSERT INTO character_detail (name,sauce,image,gender) VALUES(?,?,?,?)`;
  try {
    let { name, sauce, image, gender } = req.body;
    db.query(sql, [name, sauce, image, gender], (err, result) => {
      if (err) throw new Error("Error adding character detail.");
      res.json({ ...result, success: true });
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getRandomCharactar = (req, res) => {
  let except = req.body.except.length === 0 ? [0] : req.body.except;
  let sql = `SELECT uid,image FROM character_detail WHERE uid NOT IN (${except.map(
    (ex) => ex
  )}) ORDER BY RAND() LIMIT 1`;
  try {
    db.query(sql, (err, result) => {
      if (err) throw new Error("Error getting random character.");
      res.json({ result });
    });
  } catch (e) {
    console.log(e);
  }
};

exports.checkAnswer = (req, res) => {
  let sql = `SELECT * FROM character_detail WHERE uid=?`;
  let { uid } = req.body;
  try {
    db.query(sql, [uid], (err, result) => {
      if (err) throw new Error("Error getting the answer.");
      res.json(result[0]);
    });
  } catch (e) {
    console.log(e);
  }
};
