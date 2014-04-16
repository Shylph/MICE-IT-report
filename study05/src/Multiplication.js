(function(){
    var inputBoxId = "";
    var buttonId = "";
    var resultBoxId = "";

    function Multiplication(inputId, btnId, resultId){
        inputBoxId = inputId;
        buttonId = btnId;
        resultBoxId = resultId;
    }
    Multiplication.prototype.addBtnEventListener = function(){
        var button = document.getElementById(buttonId);
        button.addEventListener("click", this.clickEvent);
    };
    Multiplication.prototype.getInputValue = function(){
        var inputBox = document.getElementById(inputBoxId);
        return inputBox.value;
    };
    Multiplication.prototype.clickEvent = function(){
        //입력 받기
        //this.getInputValue() 호출 불가
        var inputBox = document.getElementById(inputBoxId);
        var operand1 = inputBox.value;

        if (inputBox.checkValidity()) {
            var str = "";
            for (var operand2 = 1; operand2 <= 9; operand2++) {
                str = str +"<br>" + operand1 + "x" + operand2 + "=" + operand1 * operand2;
            }

            //결과 출력
            var resultBox = document.getElementById(resultBoxId);
            resultBox.innerHTML = str;
        }else{
            alert("숫자는 1~9까지 입력 받을 수 있습니다.");
        }
    };

    window.Multiplication = Multiplication;
})();
