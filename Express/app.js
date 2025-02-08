import express from "express";
import path from "path";
const app = express();

//! Route parameter in express

app.get("/profile/:username", (req, res) => {
  console.log(req.params);
  res.send(`My username is ${req.params.username}`);
});

app.get("/profile/:username/articale/:slug", (req, res) => {
  console.log(req.params);
  // res.send(`<h1>Article ${req.params.username} By ${(req.params.slug)}</h1>`);
  const slugAdd = req.params.slug.replace(/[-]/g, " ");
  res.send(`<h1>Article ${req.params.username} By ${slugAdd}</h1>`);
});

//! Query Parameters
app.get("/product", (req, res) => {
  console.log(req.query);
  res.send(`<h1>user search for Prodect ${req.query.page} Page ${req.query.limit}</h1>`);
});




//* app.use(express.static("./test/public"));

// const staticPath = path.join(import.meta.dirname, "public");
// app.use("/public", express.static(staticPath));

// const response = await fetch("https://dummyjson.com/quotes/1");
// const json = await response.json();
// console.log(json);

// console.log(import.meta.dirname);
// console.log(import.meta.filename);

// app.get("/", (req, res) => {
//   //!   console.log(__dirname);
//   //!  console.log(__filename);

//   //? console.log(import.meta.url);

//   // const __filename = new URL(import.meta.url);
//   // console.log(__filename);

//   //   const homePagePath = path.join(import.meta.dirname, "public", "index.html");
//   //   res.sendFile(homePagePath);

//   res.send();
// });

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server is running at port http://localhost:${PORT}`);
});
