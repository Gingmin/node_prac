// server
const http = require("http");
http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World");
}).listen(1337, "127.0.0.1");
// console.log("Server running at http://127.0.0.1:1337/")
//
// let result = 0;
// console.time("duration_sum");
// for (let i = 0; i <= 1000; i++) {
//     result += i;
// }
// console.timeEnd("duration_sum");
// console.log("r : %d", result);
// console.log(__filename);
// console.log(__dirname);
// const Person = {name: "t", age: 20};
// console.dir(Person);
//
// console.log("argv 속성의 파라미터 수 : " + process.argv.length);
// console.dir(process.argv);

// process.argv.forEach((item, index) => {
//     console.log(index + " : ", item);
// });
// console.log(process.env);
// console.log(process.env[JAVA_HOME]);

const calc = require('./addCalculator');
console.log("calc.add 함수 호출 결과 : %d", calc.add(10, 10));