const http = require('http');
const host = 'localhost';
const fs = require('fs')
const port = process.env.PORT || 8000;


const server = http.createServer((req , res)=>{
    const url = req.url;
    res.setHeader("Content-Type", "text/html");
    if(url == "/"){
        res.writeHead(200);
        const data = fs.readFileSync("index.html");
        res.end(data.toString());
    }
    else if(url == "/about"){
        res.writeHead(200);
        res.end(`<html><body><h1>This is About</h1></body></html>`);
    }
    else{
        res.writeHead(404);
        res.end(`<html><body><h1>Page not found</h1></body></html>`);
    }
});
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
