var board = document.getElementById("board");

for(var i=0; i<4; i++){
    for(var j=0; j<4; j++){
        // TODO : 여기에 필요한 코드를 작성해주세요.
        var color = Array(2);
        color[0] = "black";
        color[1] = "white";
        if(i % 2 === 1){
            color[0] = "white";
            color[1] = "black";
        }

        var span = document.createElement("span");
        span.setAttribute("class",color[j%2]);
        board.appendChild(span);
        var square = board.getElementsByTagName("span")[i*4+j];

        square.addEventListener('click',function(event){

            var beforeSquare = document.querySelector(".red");
            if(beforeSquare != null){
                var blackCnt = document.querySelectorAll(".black").length;
                var whiteCnt = document.querySelectorAll(".white").length;
                if(blackCnt < whiteCnt){
                    beforeSquare.className = "black";
                }else{
                    beforeSquare.className = "white";
                }
            }

            var target = event.target;
            target.className="red";
        });

    }
}
