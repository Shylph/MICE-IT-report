// = new IPhone();

var sangHun = new Person("상훈", new IPhone({number:"010-1234-5678"}));

var yeongHui = new Person("영희", new Android({number:"010-5678-4321"}));


sangHun.sendSMS(yeongHui, "영희야 안녕??");


yeongHui.sendSMS(sangHun, "어 왜???")