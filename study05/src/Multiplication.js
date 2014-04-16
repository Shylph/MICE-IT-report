(function () {
    var inputBoxId = "";
    var buttonId = "";
    var resultBoxId = "";

    function Multiplication(inputId, btnId, resultId) {
        inputBoxId = inputId;
        buttonId = btnId;
        resultBoxId = resultId;
    }

    Multiplication.prototype.addBtnEventListener = function () {
        var button = document.getElementById(buttonId);
        button.addEventListener("click", this.clickEvent.bind(this));
    };
    Multiplication.prototype.getInputValue = function () {
        var inputBox = document.getElementById(inputBoxId);
        return inputBox.value;
    };
    Multiplication.prototype.getInputBox = function () {
        return document.getElementById(inputBoxId);
    };
    Multiplication.prototype.setResult = function (source) {
        var resultBox = document.getElementById(resultBoxId);
        resultBox.innerHTML = source;
    };
    Multiplication.prototype.clickEvent = function () {
        //입력 받기
        var inputBox = this.getInputBox();
        var operand1 = this.getInputValue();

        if (inputBox.checkValidity()) {
            var str = "";
            for (var operand2 = 1; operand2 <= 9; operand2++) {
                str = str + "<br>" + operand1 + "x" + operand2 + "=" + operand1 * operand2;
            }
            this.setResult(str);
        } else {
            alert("숫자는 1~9까지 입력 받을 수 있습니다.");
        }
    };

    window.Multiplication = Multiplication;
})();
