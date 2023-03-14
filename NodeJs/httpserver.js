const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/') {
        res.end('Hello from the server side');
    } else if (req.url === '/about') {
        res.end('This is about page');
    }
    else if (req.url == "/userapi") {
        res.readFile("Test.json", "utf8", (err, data) => { console.log(data); res.end(data); });

    }
    else {
        res.end('Page not found');
    }

});

server.listen(8000, "127.0.0.1", () => {
    console.log('Listening to port 8000');
});



