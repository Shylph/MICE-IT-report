(function() {
    function Phone(option) {
        if (!option) {
            option = {
                modelName: "",
                releaseDate: "",
                price: ""
            }
        }
        this.modelName = option.modelName;
        this.releaseDate = option.releaseDate;
        this.price = option.price;
    }

    Phone.prototype.boot = function () {
        console.log("부팅합니다.");
    }
    Phone.prototype.shoutDown = function () {
        console.log("폰이 종료 됩니다..");
    }
    Phone.prototype.calling = function (callNumber) {
        if(callNumber != null){
            console.log(callNumber + "로 전화를 겁니다.");
        }else{
            console.log("전화를 걸수 없습니다.");
        }
    }
    Phone.prototype.sendMessage = function (recipientNumber, message) {
        if(message ==null){
            message="";
        }
        if(recipientNumber != null){
            console.log(recipientNumber + "로 메세지를 보냅니다.");
            console.log("---Message---");
            console.log(message);
            console.log("-------------")
        }else{
            console.log("메세지를 보낼수 없습니다.");
        }
    }
    Phone.prototype.infoModelName = function(){
        if(this.modelName !== ""){
            console.log("모델명은는 "+this.modelName+"입니다.");
        }else{
            console.log("모델명을 알 수 없습니다.")
        }
    }

    window.Phone = Phone;
})();