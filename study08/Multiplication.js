function calculate(op1) {
    var operand1 = op1;
    var str = "";
    for (var operand2 = 1; operand2 <= 9; operand2++) {
        str = str + "\n" + operand1 + "x" + operand2 + "=" + operand1 * operand2;
    }
    return str;
}

var myArgs = process.argv.slice(2);
var operand1 = parseInt(myArgs, 10)

var result = calculate(operand1);
console.log(result);