import express from "express";
// import router from "./routes/shortener.routes.js";
import { ShortenedRouter } from "./routes/url.routes.js";

import bodyParser from "body-parser"; // Import body-parser

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true })); // Use body-parser middleware

// console.log(path.join("data", "links.json"));

// app.use(router)
app.use(ShortenedRouter);

app.listen(PORT, () => {
  console.log(`Server starting on port http://localhost:${PORT}`); // Corrected typo
});
