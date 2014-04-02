(function() {
    function ConvertStaticBase01() {

    }

    ConvertStaticBase01.printProblem01 = function () {
        console.log("===1-1 : 1부터 100까지 출력하기===")
        for (var number = 1; number <= 100; number++) {
            console.log(number);
        }
    };

    ConvertStaticBase01.printProblem02 = function () {
        console.log("===1-2 : 홀수 출력===");
        for (var number = 1; number <= 100; number++) {
            if (number % 2 != 0) {
                console.log(number);
            }
        }
    };

    ConvertStaticBase01.printProblem03 = function () {
        console.log("===1-3 : 구구단===");
        for (var operand = 1; operand <= 9; operand++) {
            for (var operand2 = 1; operand2 <= 9; operand2++) {
                console.log(operand + "x" + operand2 + "=" + operand * operand2);
            }
        }
    };

    window.ConvertStaticBase01 = ConvertStaticBase01;
})();