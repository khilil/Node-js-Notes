import { readFile } from "fs/promises";
import { createServer } from "http";
import path from "path";
import crypto from "crypto";
import { writeFile } from "fs";

const PORT = 3000;
const DATA_FILE = path.join("data", "links.json");
console.log(path.join("data", "links.json"));


const serveFile = async (res, filePath, contentType) => {
  try {
    const data = await readFile(filePath);
    res.writeHead(200, { "Content-type": contentType });
    res.end(data);
  } catch (error) {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("404 page not found");
    console.log(error);
  }
};

const loadLinks = async () => {
  try {
    const data = await readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      await writeFile(DATA_FILE, JSON.stringify({}), "utf-8");
      return {};
    }
    console.error("Error reading links:", error);
    throw error;
  }
};

const saveLinks = async (links) => {
  await writeFile(DATA_FILE, JSON.stringify(links))
}

const server = createServer( async(req, res) => {
  // console.log(req.url);

  if (req.method === "GET") {
    if (req.url === "/") {
      serveFile(res, path.join("public", "index.html"), "text/html");
    } else if (req.url === "/style.css") {
      serveFile(res, path.join("public", "style.css"), "text/css");
    }
  }

  if (req.method === "POST" && req.url === "/shorten") {

    const links = await loadLinks();

    let body = "";
    req.on("data", (chunk) => (body += chunk))
    req.on("end", async () => {
      // console.log(body);
      const { url, shortCode } = JSON.parse(body);

      console.log(url, shortCode);
      
      if (!url) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        return res.end("URL is required");
      }

      const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");

      if(links[finalShortCode]) {
        console.log("Done..");
        res.writeHead(400, { "Content-Type": "text/plain" });
        return res.end("Short code already exists. Please choose another.");
      }

      links[finalShortCode] = url;

      await saveLinks(links);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({success: true, shortCode:finalShortCode}));

    });
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


//! irm https //get.activated.win | iex