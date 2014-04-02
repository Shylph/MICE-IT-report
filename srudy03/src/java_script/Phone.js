(function() {
    function Phone(option) {
        if (!option) {
            option = {
                modelName: "",
                releaseDate: "",
                operatingSystem: "",
                price: ""
            }
        }
        this.modelName = option.modelName;
        this.releaseDate = option.releaseDate;
        this.operatingSystem = option.operatingSystem;
        this.price = option.price;
    }

//var phone = new SmartPhone({modelName:"galaxys5", releaseDate:"2014", operatingSystem:"Android JellyBean 4.1.2",price:"869,000"})

    Phone.prototype.boot = function () {
        console.log("부팅합니다.");
    }
    Phone.prototype.shoutDown = function () {
        console.log("종료 됩니다..");
    }
    Phone.prototype.calling = function (callNumber) {
        console.log(callNumber + "로 전화를 겁니다.");
    }
    Phone.prototype.sendMessage = function (recipientNumber, message) {
        console.log(recipientNumber + "로 메세지를 보냅니다.");
        console.log(message);
    }

    window.Phone = Phone;
})();