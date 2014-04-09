var board = document.getElementById("board");

var square = new Array(4);



for(var i=0; i<4; i++){
    square[i] = new Array(4);
    for(var j=0; j<4; j++){
        square[i][j] = board.getElementsByTagName("span")[i*4+j];

        square[i][j].addEventListener('click',function(event){
            console.log(event.target);
            var a = event.target;

        });
    }
}
