(function(){
    var titleHtml = "";
    var page1Html = "", page2Html = "";
    var btnHtml = "";

    var page1Id="page1",page2Id ="page2";
    var nextBtnId = "nextBtn",preBtnId = "preBtn";
    var currentIndex = "currentIndex";
    var contentPart = "contentPart";
    var contentBox = "contentBox";

    function TodayPhotoBox(todayPhotoSource){
        var todayPhoto = this.convertSourceToBoxPart(todayPhotoSource);
        this.dividePage(todayPhoto);
        this.createBtnHtml();
    }

    TodayPhotoBox.prototype.displayPhotoBox = function(id){
        var wrap = document.getElementById(id);
        wrap.innerHTML = this.getResultHtmlPage();
    };

    TodayPhotoBox.prototype.getResultHtmlPage = function(){
        var result ="<div class='contentBox'>"+ titleHtml + page1Html + page2Html + btnHtml+"</div>";
        return result;
    };

    TodayPhotoBox.prototype.dividePage = function(todayPhoto){
        var firstImgStr = todayPhoto.splice(0,4).join("");
        var secondImgStr = todayPhoto.join("");
        page1Html = this.getDivString(page1Id,firstImgStr);
        page2Html = this.getDivString(page2Id,secondImgStr,"class='hide'");
    };

    TodayPhotoBox.prototype.getDivString = function(id,source,optionStr){
        var result = "<div id='"+id+"' "+optionStr+">"+source+"</div>";
        return result;
    };

    TodayPhotoBox.prototype.convertSourceToBoxPart = function(todayPhotoSource){
        var imgs = [];
        for(var i=0; i<todayPhotoSource.length; i++){
            imgs.push("<div class ='"+ contentPart +"'><img src='"+todayPhotoSource[i].img+"'><p>"+todayPhotoSource[i].title+"</p></div>");
        }
        return imgs;
    };

    TodayPhotoBox.prototype.createTitleHtml = function(title){
        titleHtml = "<div class='contentTitle'><h1>"+title+"</h1></div>";
    };

    TodayPhotoBox.prototype.createBtnHtml = function(){
        var str = "<button id ='"+ preBtnId +"'>&lt;</button>";
        str = str + "<strong id = '"+currentIndex+"'>1</strong><span>/</span>2"
        str = str + "<button id ='"+ nextBtnId +"'>&gt;</button>";
        str="<div class='contentBtn'>"+str+"</div>"
        btnHtml = str;
    };

    TodayPhotoBox.prototype.addBtnEventListener = function(){
        var nextBtn = document.getElementById(nextBtnId);
        nextBtn.addEventListener("click",this.changePage);
        var preBtn = document.getElementById(preBtnId);
        preBtn.addEventListener("click",this.changePage);
    };

    TodayPhotoBox.prototype.changePage = function(){
        var page1 = document.getElementById(page1Id);
        var page2 = document.getElementById(page2Id);

        if(page1.className==="hide"){
            page1.className = "";
            page2.className = "hide";
        }
        else{
            page1.className = "hide";
            page2.className = "";
        }

//      changeIndex();
        var index = document.getElementById(currentIndex);
        var beforeIndex = index.innerHTML;
        var afterIndex=0;

        if(beforeIndex == "1"){
            afterIndex=2;
        }else if (beforeIndex == "2"){
            afterIndex=1;
        }
        index.innerHTML = afterIndex;
    };


    window.TodayPhotoBox = TodayPhotoBox;
})();

