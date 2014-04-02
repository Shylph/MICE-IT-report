function Phone(option) {
    this.setOption(option)
}
function Phone() {
}
Phone.setOption = function (option) {
    console.log("PPPPPasdaasd");
    if (!option) {
        console.log("Phone에 option이 필요합니다.");
        option = {
            modelName: "",
            releaseDate: "",
            price: "",
            number: "",
            type: "feature"
        }
    }
    console.log("PPPPP" + option.number);
    this.type = option.type;
    this.number = option.number;
    this.modelName = option.modelName;
    this.releaseDate = option.releaseDate;
    this.price = option.price;
}
Phone.prototype.getNumber = function () {
    return this.number;
};
Phone.prototype.getType = function () {
    return this.type;
};

Phone.prototype.boot = function () {
    console.log("부팅합니다.");
};
Phone.prototype.shoutDown = function () {
    console.log("폰이 종료 됩니다..");
};
Phone.prototype.calling = function (callNumber) {
    if (callNumber != null) {
        console.log(callNumber + "로 전화를 겁니다.");
    } else {
        console.log("전화를 걸수 없습니다.");
    }
};
Phone.prototype.sendMessage = function (number, message) {
    if (message == null) {
        message = "";
    }
    if (number != null) {
        console.log(this.number + "(" + this.type + ") -> " + number + " : " + message);
    } else {
        console.log("메세지를 보낼수 없습니다.");
    }
};
Phone.prototype.infoModelName = function () {
    if (this.modelName != null) {
        console.log("모델명은는 " + this.modelName + "입니다.");
    } else {
        console.log("모델명을 알 수 없습니다.")
    }
};
