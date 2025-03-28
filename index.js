const express = require("express");

const app = express();
const database = require("./Config/DB");
const cors = require("cors");

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Home page");
});

app.listen(PORT, async () => {
  try {
    await database.connect();
    console.log(`app is running at port ${PORT} and DB is also connected`);
  } catch (error) {
    console.log(error, "error while running the app");
  }
});
