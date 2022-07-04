const fs = require('fs');

// // 비동기
// fs.readFile('./README.md', 'utf8', function(err, data) {
//    console.log("비동기 " + data);
// });
// // 동기식
// const data = fs.readFileSync('./README.md', 'utf8');
// console.log("동기 " + data);
// console.log("README.md file read dispatch");

// fs.writeFile('./output.txt', 'Hello World', function(err) {
//    if (err) {
//        console.log("Error : ", err);
//    }
//    console.log("output.txt file data write");
// });

// fs.open('./output.txt', 'w', (err, fd) => {
//     if (err) throw err;
//     const buf = new Buffer("안녕\n");
//     fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer) {
//         if (err) throw err;
//         console.log(err, written, buffer);
//         fs.close(fd, function() {
//             console.log("file open and write complete");
//         });
//     });
// });

// fs.open('./output.txt', 'r', (err, fd) => {
//    if (err) throw err;
//    const buf = new Buffer(10);
//    console.log('Buffer type', Buffer.isBuffer(buf));
//    fs.read(fd, buf, 0, buf.length, null, (err, bytesRead, buffer) => {
//     if (err) throw err;
//     const inStr = buffer.toString('utf8', 0, bytesRead);
//     console.log("file read data", inStr);
//     console.log(err, bytesRead, buffer);
//     fs.close(fd, () => {
//         console.log("output read complete");
//     })
//    });
// });

// const output = "안녕 1 !";
// const buffer1 = new Buffer(10);
// const len = buffer1.write(output, 'utf8');
// console.log("첫 번째 버퍼의 문자열 : ", buffer1.toString());
// const buffer2 = new Buffer("안녕 2 !");
// console.log("두 번째 버퍼의 문자열 : ", buffer2.toString());
// console.log("버퍼 타입 ", Buffer.isBuffer(buffer1));
// const byteLen = Buffer.byteLength(output);
// const str1 = buffer1.toString("utf8", 0, byteLen);
// const str2 = buffer2.toString('utf8');
// buffer1.copy(buffer2, 0, 0, len);
// console.log("두 번째 버퍼에 복사한 후의 문자열 : ", buffer2.toString('utf8'));
// const buffer3 = Buffer.concat([buffer1, buffer2]);
// console.log(buffer3.toString('utf8'));

// const infile = fs.createReadStream('./output.txt', {flags: 'r'});
// const outfile = fs.createWriteStream('./output2.txt', {flags: 'w'});
// infile.on('data', (data) => {
//     console.log('data', data);
//     outfile.write(data);
// })
// infile.on('end', () => {
//    console.log("read end");
//    outfile.end(() => {
//        console.log("write end");
//    });
// });

const inname = './output.txt';
const outname = './output2.txt';
fs.exists(outname, function(exists) {
    if (exists) {
        fs.unlink(outname, function(err) {
            if (err) throw err;
            console.log('기존 파일 ' + outname + ' 삭제');
        });
    }
    const infile = fs.createReadStream(inname, {flags: 'r'});
    const outfile = fs.createWriteStream(outname, {flags: 'w'});
    infile.pipe(outfile);
    console.log('copy ' + inname + ' -> ' + outname);
});
