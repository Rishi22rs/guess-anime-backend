const express = require("express");
const cors = require("cors");
const { generateUploadURL } = require("./s3");

const app = express();
const port = process.env.PORT || 6699;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("i am runnin");
});

app.get("/s3url", async (req, res) => {
  const url = await generateUploadURL();
  res.json({ url });
});

app.use("/api", require("./routes/characterDetail"));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
