const express = require("express");
const path = require("path");
const hbs = require('hbs');
const { request } = require("http");
const app = express();
const port = 8000;


// relativePath ../ /about
// AbsoultePath \

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "/templates/views");
const partialsPath = path.join(__dirname, "/templates/partials");

// To set the view engine
app.set('view engine', 'hbs');
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.render('index', {
        dynamic: "handlebars",
    });
});
app.get("/about", (req, res) => {

    // request(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=fca30c100b58cfc28eb762a4795f0573`)
    // .on('data', (chunk) => {
    //     const objData = JSON.parse(chunk);
    //     const arrData = [objData];
    //     console.log(`${arrData[0].name}, city with temp, ${arrData[0].main.temp - 273.15} degree celcius`);
    //     res.write(`${arrData[0].name}, city with temp, ${arrData[0].main.temp - 273.15} degree celcius`);
    // })
    // .on('end', (err) => {
    //     if (err) return console.log('connection closed due to errors', err);
    //     res.end();
    // });

    console.log(req.query.name);
    res.render("about", { name: req.query.name });

});

app.get("/about/*", (req, res) => {
    res.render("404error", {
        errorMsg: "Opps! Page Not Found",
    });
});

app.get("*", (req, res) => {
    res.render("404error", {
        errorMsg: "Opps! Page Not Found",
    });
});


app.listen(port, () => {
    console.log("Server is listening to port 8000");
});

