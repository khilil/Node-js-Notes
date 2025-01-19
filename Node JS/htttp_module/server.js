const http = require('http')

//! web server

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.write("Welcom to Server...")
        res.end()
    }
    if(req.url === "/about"){
        res.write("About Us... Like")
        res.end()
    }
    if(req.url === "/contect"){
        res.setHeader("Content-Type", "text/html")
        res.write("<h1>Contect Us...</h1>")
        res.end()
    }
})

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Listening on POSRT ${PORT}..`); 
})

