var type = "IPhone";
function IPhone(option) {
    if (!option) {
        console.log("IPhone에 option이 필요합니다.")
    }


    // Phone.number = option.number;
    //     this.option.type = type;
    //      this.option.number = type;

    console.log("IPhone" + option.number);

    //this.number = option.number;
//    console.log("aa :" + this.number);

    Phone.call(this, option);
}


IPhone.prototype = new Phone();
IPhone.prototype.constructor = IPhone;

window.IPhone = IPhone;
