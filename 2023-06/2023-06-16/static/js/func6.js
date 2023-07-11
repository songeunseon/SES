let com_num=0;
let win=0, lose=0, draw=0;
let tern="컴";  //  값이  컴이면  컴퓨터 턴, 값이 유저면 내 턴
let play="시작"; //값이 시작이면 새로운 게임 시작,  값이 진행중이면 아직 게임중
function start(){
    if(play != "시작"){
    alert("아직 게임이 끝나지 않았습니다");
    return;
    }
    play="진행중";
}
function com(){
    if(tern ==="유저"){
        alert("컴퓨터 턴이 아닙니다.");
        return;
    }
    com_num=Math.floor(Math.random()*6)+1;
    let com=document.getElementById("com");
    com.src="./static/image/"+com_num+".png";
    tern="유저";
}
function me(){
    if(tern==="컴"){
        alert("당신의 턴이 아닙니다");
        return;
    }
    tern="컴";
    play="시작";
    let me_num=Math.floor(Math.random()*6)+1;
    let me=document.getElementById("me");
    me.src="./static/image/"+me_num+".png";

    var res=document.getElementById(result);
    if(com_num==me_num){
        res.innerHTML="무";
        draw++;
    }else if(com_num<me_num){
        res.innerHTML="승";
        win++;
    }else{
        res.innerHTML="패";
        lose++;
    }
}
document.getElementById("result").innerText=win+"승"+lose+"패"+draw+"무";