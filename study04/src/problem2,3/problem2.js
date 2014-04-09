var board = document.getElementById("board");

for(var i=0; i<4; i++){
  //  var square = new Array(4);
//    square[i] = new Array(4);
    for(var j=0; j<4; j++){
        color = Array(2);
        color[0] = "black";
        color[1] = "white";
        if(i % 2 === 1){
            color[0] = "white";
            color[1] = "black";
        }

        var span = document.createElement("span");
        span.setAttribute("class",color[j%2]);
        board.appendChild(span);

    //    square[i][j] = board.getElementsByTagName("span")[i*4+j];

//        square[i][j].addEventListener('click',function(event){
 //           console.log(event.target);
//        });
    }
}
