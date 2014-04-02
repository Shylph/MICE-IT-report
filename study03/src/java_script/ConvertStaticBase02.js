(function() {
    function ConvertStaticBase02() {

    }

    ConvertStaticBase02.sumProgram = function () {
        var sum = 0;
        var inputNumber = 0;
        while (inputNumber != null) {
            inputNumber = prompt("더할 숫자를 입력해주세요.", "0");
            if (inputNumber != null) {
                sum += parseInt(inputNumber);
            }
        }
        alert("숫자의 총합은 : " + sum);
    };

    window.ConvertStaticBase02 = ConvertStaticBase02;
})();