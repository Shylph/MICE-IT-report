(function(){
    var type = "IPhone";
    function IPhone(option) {
        if (!option) {
            console.log("IPhone에 option이 필요합니다.")
        }


        //Phone.number = option.number;
        option.type = type;

        console.log("IPhone" + option.number);


        Phone.call(this, option);
    }


    IPhone.prototype = new Phone();
    IPhone.prototype.constructor = IPhone;

    window.IPhone = IPhone;

})();
