// npm install express
const http = require("http");

const server = http.createServer((req,res) => {

    const url = req.url;
    if (url === '/'){
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    res.end("Hello, World!");}

    else if (url === '/about'){
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    res.end("Day la trang about");}

    else if (url === '/infomation'){
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    res.end("Day la trang infomation");}

})

server.listen(3000,"localhost",() => {
    console.log("Server running port 3000");
})