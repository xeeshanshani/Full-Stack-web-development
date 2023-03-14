// Read api from file

res.readFile("Test.json", "utf8", (err, data) => { console.log(data); res.end(data); });

//display api in browser
const http = require('http');
const fs = require('fs');
fs.readFileSync('Test.json', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
//
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



