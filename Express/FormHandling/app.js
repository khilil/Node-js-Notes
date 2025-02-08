import express from 'express';
import path from 'path';

const app = express();
const PORT = 3002;

const staticPath = path.join(import.meta.dirname, "public");

app.use(express.static(staticPath));
app.use(express.urlencoded({extends: true}))

// app.get("/contect", (req, res) => {
//     console.log(req.query);
//     res.redirect("/");
//     // res.send("ok")
// })

app.post("/contect", (req, res) => {
    console.log(req.body);
    res.redirect("/");
})

app.use((req, res) => {
    return res.status(404).sendFile(path.join(import.meta.dirname, "views", "404.html"));
})

app.listen(PORT, () => {
    console.log(`Server strting on Port http://localhost:${PORT}`);
})


