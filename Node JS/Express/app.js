import express from "express";

const app = express();
//! --------- Introduction to Express.js ------------
//  Express.js is a minimal and flexible web application framework for
//  Node.js based on http module.
//  It simplifies routing, middleware, and handling HTTP requests in Node.js
//   applications.
//  It is an extremely popular with wide community support.
//  Alternatives: Fastify, Nest.js, Koa, Hono, Elysia.js
//  Use npm install express command to install Express.js
//  We are going to use Express.js v5 in this project which is already stable.
//  For some reasons, directly installing express installs v4, which is why, you can use
// npm install express@5 to install latest version.

const PORT = 3000;

app.get("/", (req, res) => res.send("<h1>Hello World</h1>"));
app.get("/about", (req, res) => res.send("<h1>Hello World About Page</h1>"));
app.get("/contect", (req, res) => {
    return res.send(`  <div class="container">
        <h1>URL Shortener</h1>
        <form id="shorten-form">
          <div>
            <label for="url">Enter URL: </label>
            <input type="url" name="url" id="url" required />
          </div>
  
          <div>
            <label for="shortCode">Enter URL: </label>
            <input type="text" name="shortCode" id="shortCode" required />
          </div>
          <button type="submit">Shorten</button>
        </form>
  
        <h2>Shortened URLs</h2>
        <ul id="Shortened-urls"></ul>
      </div>`)
});

console.log(process);


app.listen(PORT, () => {
  console.log(`Server is running at port http://localhost:${PORT}`);
});
