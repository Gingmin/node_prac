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

// const calc = require('./addCalculator');
// console.log("calc.add 함수 호출 결과 : %d", calc.add(10, 10));

// const nconf = require('nconf');
// nconf.env();
// console.log("JAVA_HOME 환경변수의 값 : %s", nconf.get("JAVA_HOME"));

// const os = require("os");
// console.log("시스템 hostname : %s", os.hostname());
// console.log("시스템 메모리 : %d / %d", os.freemem(), os.totalmem());
// console.log("시스템 CPU\n");
// console.dir(os.cpus());
// console.log("시스템 네트워크 인터페이스 정보\n");
// console.dir(os.networkInterfaces());

// const path = require("path");
// const directories = ["users", "mike", "docs"];
// const docsDirectory = directories.join(path.sep);
// console.log("문서 디렉터리 : %s", docsDirectory);
// const curPath = path.join("/Users/m", "notepad.exe");
// console.log("파일 패스 : %s", curPath);
// const filename = "C:\\Users\\mike\\notepad.exe";
// const dirname = path.dirname(filename);
// const basename = path.basename(filename);
// const extname = path.extname(filename);
// console.log('디렉터리 : %s, 파일이름 : %s, 확장자 : %s', dirname, basename, extname);