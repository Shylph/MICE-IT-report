(function() {
    function SmartPhone(option,operatingSystem) {
        Phone.call(this, option);
        if (operatingSystem == null) {
            operatingSystem = "";
        }

        this.operatingSystem = operatingSystem;
    }

    SmartPhone.prototype = new Phone();
    SmartPhone.prototype.constructor = SmartPhone;

    SmartPhone.prototype.playApp = function (appName) {
        if(appName != null) {
            console.log(appName + "app을 실행합니다.");
        }else{
            console.log("App을 실행 시킬수 없습니다.");
        }
    };

    SmartPhone.prototype.infoOS = function(){
        if(this.operatingSystem !== ""){
            console.log("운영체제는 "+this.operatingSystem+"입니다.");
        }else{
            console.log("운영체제 정보를 알 수 없습니다.")
        }
    };

    window.SmartPhone = SmartPhone;
})();