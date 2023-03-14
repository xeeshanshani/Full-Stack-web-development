const fs = require("fs");
const path = require("path");



const bioData = {
    name: "Jason",
    age: 25,
    location: "USA",
    hobbies: ["coding", "reading", "writing"],
    education: {
        degree: "Bachelors",
        college: "University of California",
        year: 2023
    },
    getBio: function () {
        return "My name is " + this.name + " and I am " + this.age + " years old." + " I live in " + this.location + " and I have a " + this.education.degree + " degree from " + this.education.college + " in " + this.education.year + ".";
    }
};
//console.log(bioData.getBio());
//console.log(bioData);
// Define Stringify
// 1. Convert object to string
// 2. Convert array to string

const jsonData = JSON.stringify(bioData.hobbies);
console.log(jsonData);