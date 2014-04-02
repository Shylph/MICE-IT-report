// = new IPhone();

var sangHun = new Person("상훈", new IPhone({number:"010-1234-5678"}));
console.log(sangHun.getName());
var yeongHui = new Person("영희", new Android({number:"010-5678-4321"}));
console.log(yeongHui.getName());
console.log(sangHun.getName());

sangHun.sendSMS(yeongHui, "영희야 안녕??");
