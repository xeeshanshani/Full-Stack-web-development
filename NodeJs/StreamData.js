// hey are you looking for the StreamData class? It's in StreamData.js

const StreamData = require('./StreamData.js');
const http = require('http');
const fs = require('fs');
const server = http.createServer();

server.on('request', (req, res) => {
    // fs.readFile("./input.txt", (err, data) => {
    //     if (err) return console.error(err);
    //     res.end(data.toString());
    // }
    // );
    const readableStream = fs.createReadStream("./input.txt");
    readableStream.on('data', (chunkdata)
    );
    readableStream.on('end', () => {
        res.end();
    }
    );
    readableStream.on('error', (err) => {
        console.log(err);
        res.end("File not found");
    }
    );



});
server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to port 8000");
});
