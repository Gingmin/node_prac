function add(a, b, callback) {
    const result = a + b;
    callback(result);

    const history = function() {
        return a + " + " + b + " = " + result;
    };
    return history;
}
const add_history = add(10, 10, function (result) {
    console.log("result ", result);
});
console.log(add_history());