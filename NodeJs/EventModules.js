const EventEmitters = require('events');

const event = new EventEmitters();

event.on("sayMyName", () => {
    console.log("Your name is Zeeshan");
}
);
event.emit("sayMyName");
event.on("parhmfunction", (name, age) => {
    console.log(`Your name is ${name} and your age is ${age}`);
}
);
event.emit("parhmfunction", "Zeeshan", 29); 
