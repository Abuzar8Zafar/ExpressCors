import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
const port = 9000;

app.use(cors());

app.get("/api/proxy", async (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res.status(400).send("URL is required");
  }

  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    res.status(500).send("Error fetching the URL");
  }
});

app.listen(9000, () => {
  console.log("====================================");
  console.log(`Staring server on port ${port} `);
  console.log("====================================");
});
