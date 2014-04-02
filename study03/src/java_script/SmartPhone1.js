(function() {
    var operatingSystem = "";
    function SmartPhone(option) {
        Phone.call(this, option);
        if (!option) {
            console.log("smartPhone에 option이 필요합니다.")
            option = {};
            if (option.operatingSystem == null) {
                option.operatingSystem = "";
            }
        }
        operatingSystem = option.operatingSystem;
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
        if(operatingSystem !== ""){
            console.log("운영체제는 "+operatingSystem+"입니다.");
        }else{
            console.log("운영체제 정보를 알 수 없습니다.")
        }
    };

    window.SmartPhone = SmartPhone;
})();