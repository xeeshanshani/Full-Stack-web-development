// Real Worlds Examples
// asynchronous vs synchronous

const fs = require('fs');
// fs.writeFileSync("readme.txt", "Hello, this is the file created by Xeeshan", (err) => { console.log("File is created") });
// fs.appendFileSync("readme.txt", "Hello, this is the file created by Xhani", (err) => { console.log("Data is appended") });
fs.readFile("readme.txt", "utf-8", (err, data) => {
    console.log(err);
    console.log(data)
});