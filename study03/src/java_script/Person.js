(function() {
    var name ="";
    var phone ="";

    function Person(paraName, paraPhone) {
        name = paraName;
        phone = paraPhone;
    }

    Person.prototype.sendSMS = function (target, message) {
        console.log(name+"는 "+target.getName()+"에게 '"+message+"' 메세지를 보냅니다.");
        phone.sendMessage(target.getPhoneNumber(),message);
    };

    Person.prototype.getSMS = function (){

    };
    Person.prototype.getName = function(){
        return name;
    }
    Person.prototype.getPhoneNumber = function() {
        return phone.getNumber();
    };

    window.Person = Person;
})();