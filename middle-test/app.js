/**
 * Created by ksh on 2014. 4. 21..
 */
(function(){
    var pageStatus = null;
    var news = "";
    var entertain = "";
    var sports = "";

    function Box(){
        this.dataRequest();
        this.checkAndInit();
        this.checkAndAddTabBtnEventListener();
        this.checkAndAddMoreBtnEventListener();
    }
    Box.prototype.callAjax =function(url, callback){
        var xmlhttp;

        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function(){
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
                pageStatus = 200;
                callback(xmlhttp.responseText);
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    };

    Box.prototype.getDom = function(id){
        return document.getElementById(id);
    };

    Box.prototype.callbackDataAjax = function(responseText){
        var dataList = JSON.parse(responseText);
        var templateString = this.getDom('boxTemplate').innerHTML;
        var parseString = [];
        var data = '';;

        var liNewsString = this.createLiString(dataList[0]["news"]);;

        var liEnterString = this.createLiString(dataList[1]["enter"]);

        var liSportsString = this.createLiString(dataList[2]["sports"]);

        parseString.push(template(templateString,{liNews :liNewsString.join(""),liEntertain :liEnterString.join(""),liSports:liSportsString.join("")}));
        this.getDom('container').innerHTML = parseString.join("");
    };

    Box.prototype.createLiString = function(dataList){
        var liString = [];
        for(var i=0;i<dataList.length;i++){
            data = dataList[i];
            if(i<5){
                this.pushTemplateToString(liString,data,"show");
            }else{
                this.pushTemplateToString(liString,data,"hide");
            }
        }
        return liString;
    };

    Box.prototype.pushTemplateToString = function(string,data,visibleStatus){
        var liTemplateString = this.getDom("liTemplate").innerHTML;
        string.push(template(liTemplateString,{newsId: data.newsId, title: data.title, visibleState:visibleStatus}));
    };

    Box.prototype.dataRequest = function(){
        this.callAjax('data.js', this.callbackDataAjax.bind(this));
    };


    Box.prototype.init = function(){
        news = this.getDom('news');
        entertain = this.getDom('entertain');
        sports = this.getDom('sports');
    };

    Box.prototype.addTitleBtnEventListener = function(){
        var entertainTitle = this.getDom('entertainTitle');
        var sportsTitle = this.getDom('sportsTitle');
        var newsTitle = this.getDom('newsTitle');

        newsTitle.addEventListener('click',function(){
            news.setAttribute('class','box show');
            entertain.setAttribute('class','box hide');
            sports.setAttribute('class','box hide');
            newsTitle.setAttribute('class','tab titleShowBorder');
            entertainTitle.setAttribute('class','tab titleHideBorder');
            sportsTitle.setAttribute('class','tab titleHideBorder');
            this.limitShow(news);
        }.bind(this));

        entertainTitle.addEventListener('click',function(){
            news.setAttribute('class','box hide');
            entertain.setAttribute('class','box show');
            sports.setAttribute('class','box hide');
            newsTitle.setAttribute('class','tab titleHideBorder');
            entertainTitle.setAttribute('class','tab titleShowBorder');
            sportsTitle.setAttribute('class','tab titleHideBorder');
            this.limitShow(entertain);
        }.bind(this));
        sportsTitle.addEventListener('click',function(){
            news.setAttribute('class','box hide');
            entertain.setAttribute('class','box hide');
            sports.setAttribute('class','box show');
            newsTitle.setAttribute('class','tab titleHideBorder');
            entertainTitle.setAttribute('class','tab titleHideBorder');
            sportsTitle.setAttribute('class','tab titleShowBorder');
            this.limitShow(sports);
        }.bind(this));
    };

    Box.prototype.limitShow = function(p){
        var list = p.querySelectorAll('li');
        for(var i =0; i<list.length;i++){
            if(i>5){
                list[i].setAttribute("class",'txt hide');
            }
        }
    };

    Box.prototype.addMoreBtnEventListener = function(){
        var newsMoreBtn = this.getDom('btnMoreNews');
        newsMoreBtn.addEventListener('click',function(){
            var list = news.querySelectorAll("li.txt.hide");
            for(var i =0; i < list.length;i++){
                list[i].setAttribute('class','txt show');
            }
        });

        var entertainMoreBtn = this.getDom('btnMoreEnter');
        entertainMoreBtn.addEventListener('click',function(){
            var list = entertain.querySelectorAll("li.txt.hide");
            for(var i =0; i < list.length;i++){
                list[i].setAttribute('class','txt show');
            }
        });

        var sportsMoreBtn = this.getDom('btnMoreSports');
        sportsMoreBtn.addEventListener('click',function(){
            var list = sports.querySelectorAll("li.txt.hide");
            for(var i =0; i < list.length;i++){
                list[i].setAttribute('class','txt show');
            }
        });
    };

    Box.prototype.checkPageStatusAndExecution = function(f){
        //Ajax 비동기 방식으로 인해 함수의 실행을 페이지가 완료된 후 실행 될수 있게 하는 메소드이다.
        var interval = setInterval(function(){
            if(pageStatus == 200){
                f();
                clearInterval(interval);
            }
        } ,100);
        setTimeout(function(){ //최대 1초만 체크
            clearInterval(interval);
        },1000)
    };

    Box.prototype.checkAndAddTabBtnEventListener = function() {
        this.checkPageStatusAndExecution(this.addTitleBtnEventListener.bind(this));
    };

    Box.prototype.checkAndInit = function(){
        this.checkPageStatusAndExecution(this.init.bind(this));
    };
    Box.prototype.checkAndAddMoreBtnEventListener = function(){
        this.checkPageStatusAndExecution(this.addMoreBtnEventListener.bind(this));
    };

    window.Box = Box;
})();
