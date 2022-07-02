const url = require('url');
// https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%95%A0%ED%94%8C
const cu = url.parse("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%95%A0%ED%94%8C")
const cs = url.format(cu);

const qs = require('querystring');
const param = qs.parse(cu.query);
console.log('cu', cu);
console.log("cs", cs);
console.log("param.query ", param.query);
console.log("qsf ", qs.stringify(param));