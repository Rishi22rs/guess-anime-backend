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
