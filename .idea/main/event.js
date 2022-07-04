// process.on("exit", () => {
//    console.log("exit event on");
// });
// setTimeout(() => {
//     console.log("2sec after try close")
//     process.exit();
// }, 2000);

// process.on('tick', (count) => {
//     console.log("tick ", count);
// });
// setTimeout(() => {
//     console.log("2 sec after try");
//     process.emit('tick', '2')
// }, 2000);

const util = require("util");
const EventEmitter = require("events").EventEmitter;
const Calc = function() {
    const self = this;

    this.on('stop', () => {
        console.log("Calc stop event dispatch");
    });
}
util.inherits(Calc, EventEmitter); // Calc 가 EventEmitter 상속
Calc.prototype.add = function(a, b) {
    return a + b;
}
module.exports = Calc;
module.exports.title = 'calculator';
