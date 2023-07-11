//시간을 다루는 능력
//setTimeout(), setInterval()
//setTimeout()- 지정한 시간 이후에 동작시키는 함수
//setTimeout(실행할 함수,시간(밀리세컨드));
//setInterval()- 지정한 시간 주기로 계속 동작시키는 함수
//setInterval(실행할 함수, 시간(밀리세컨드));

let game=0; //전역변수
function start(){
    document.getElementById("print").innerHTML="";
    game=setInterval(change_img,100);
    //game 변수에는 setInterval의 아이디가 저장된다.
    //interval id는 setInterval 함수의 고유이름이다.
    //interval id를 통해서 setInterval를 중지시킬수 있다.

}
let change=1;

function change_img(){
    var front="coin_front.png";
    var back="coin_back.png";
    var imgtg=document.getElementById("crane");
    if(change==1){ //1일때는 뒷면
        imgtg.src="./static/image/"+back;
        change=0;
    }else{ // 0일때는 앞면
        imgtg.src="./static/image/"+front;
        change=1;
    }
}
function rst(choice){
    clearInterval(game);
    var front="coin_front.png";
    var back="coin_back.png";
    var imgtg=document.getElementById("crane");
    if(change==1){ //1일때는 뒷면
        imgtg.src="./static/image/"+back;
        change=0;
    }else{ // 0일때는 앞면
        imgtg.src="./static/image/"+front;
        change=1;
    }
    if(choice==change){
        document.getElementById("print").innerHTML="정답";
    }
}