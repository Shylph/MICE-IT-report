var type = "Android"
function Android(option) {
    if (!option) {
        option = {};
        console.log("Android에 option이 필요합니다.")
    }
    option.type = type;
    Phone.call(this, option);
}

Android.prototype = new Phone();
Android.prototype.constructor = Android;

window.Android = Android;
