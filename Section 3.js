// // Start server http
// const http = require('http');

// const server = http.createServer(reqListener = (req,res) => {
//     console.log(req.url,req.method,req.headers);
//     res.setHeader("Content-Type","text/html");
//     res.write("<html>");
//     res.write("<head><title>Application</title></head>");
//     res.write('<body><h1>Hello Word !!!</h2></body>');
//     res.write("</html>");
//     res.end();
// });

// server.listen(3000)

// response http
// const http = require('http');

// const server = http.createServer(reqListener = (req,res) => {
//     // console.log(req.url,req.method,req.headers);
//     const url = req.url;
//     if (url == '/'){
//         res.write("<html>");
//         res.write("<head><title>Enter Messager</title></head>");
//         res.write('<body><form action="/message" method="POST"><input type="text"><button type="submit">Send</button></form></body>');
//         res.write("</html>");
//         return res.end();
//     }
//     res.setHeader("Content-Type","text/html");
//     res.write("<html>");
//     res.write("<head><title>Application</title></head>");
//     res.write('<body><h1>Hello Word !!!</h2></body>');
//     res.write("</html>");
//     res.end();
// });

// server.listen(3000)


// redirect http

const http = require('http');

const server = http.createServer(reqListener = (req,res) => {
    // console.log(req.url,req.method,req.headers);
    const url = req.url;
    if (url == '/'){
        res.write("<html>");
        res.write("<head><title>Enter Messager</title></head>");
        res.write('<body><form action="/message" method="POST"><input type="text"><button type="submit">Send</button></form></body>');
        res.write("</html>");
        return res.end();
    }
    res.setHeader("Content-Type","text/html");
    res.write("<html>");
    res.write("<head><title>Application</title></head>");
    res.write('<body><h1>Hello Word !!!</h2></body>');
    res.write("</html>");
    res.end();
});

server.listen(3000)