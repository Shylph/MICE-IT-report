(function() {
    function Person(paraName, paraPhone) {
        this.name = paraName;
        this.phone = paraPhone;
    }

    Person.prototype.sendSMS = function (target, message) {
        console.log(this.name+"는 "+target.getName()+"에게 '"+message+"' 메세지를 보냅니다.");
        this.phone.sendMessage(target.getPhoneNumber(),message);
    };

    Person.prototype.getSMS = function (){

    };
    Person.prototype.getName = function(){
        return this.name;
    }
    Person.prototype.getPhoneNumber = function() {
        return this.phone.getNumber();
    };

    window.Person = Person;
})();