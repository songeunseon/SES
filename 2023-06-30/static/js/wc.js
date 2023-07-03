 //기본배열, 모든 이미지를 다 가지고 있는 기본배열, 실제 게임에 사용안함
const image=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg",
"9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg"];

const kind=["장발개","회색고양이","코숏","갈색고양이","가면고양이","달마시안",
"모르는개","모르는개","모르겠다개","허스키","웰시코기","모르는개","멋진개",
"혹부리개","퍼그","강아지"];

let 토너먼트1=new Array(); //현재 토너먼트
let 토너먼트2=new Array(); //다음 토너먼트 (현재 토너먼트에서 선택한 것)
let 순서=new Array();
let round= 16; //현재 몇강? (쌤이 해주는건 처음은 32강이지만 난 일단 16강)
let count= 1; //현재 순서 (처음은 1번)

function 순서섞기(){
    for(var i=1; i<=round; i++){
        var tmp = Math.floor(Math.random()*round);
        if(순서.indexOf(tmp)==-1){
            순서.push(tmp);
        }else{
            --i;
        }
    }
}
function 태그선택(id){
    return document.getElementById(id);
}

window.onload=function(){ //처음시작할때 필요한 내용을 넣어주는것 
    var title=태그선택("title");
    title.innerHTML=round+"강"+count+"/"+(round/2);

    //토너먼트1=image; 참조복사 , 같은공간
    토너먼트1=Array(round).fill().map((arr,i)=>i); //map()배열 얕은 복사 , 공간이 분리됨
    //0부터 31까지 숫자 토너먼트1 배열에 저장

    순서섞기();
    show();
    //이미지 클릭 이벤트 등록
    var left=태그선택("left");
    var right=태그선택("right");
    left.addEventListener("click",선택);
    right.addEventListener("click",선택);
}
function final(id,nid){
    var n=태그선택(nid);
    n.style.display="none";
    var 최종=태그선택(id);
    최종.style.width="100%";
    최종.style.height="100vw";
}
function 선택(){
    if(this==태그선택("left")){
        토너먼트2.push(토너먼트1[순서[count*2-2]]); //토너먼트2에 넣어주는것
    }else{
        토너먼트2.push(토너먼트1[순서[count*2-1]]);
    }

    if(round==2){ 
    final("left","right");
    var title=태그선택("title");
    title.innerHTML="최종선택";
    }else{
    if(count==round/2){
        round=round/2;
        count=0;
        순서=new Array();
        순서섞기();
        토너먼트1=토너먼트2.map((i)=>i);
        토너먼트2=new Array();
    }
    count++; //카운트 증가
    var title=태그선택("title");
    title.innerHTML=round+"강"+count+"/"+(round/2);
}
    show();

}
function show(){
    var left=태그선택("leftimg");
    var right=태그선택("rightimg");
    var leftText=태그선택("leftText");
    var rightText=태그선택("rightText");

    left.src="./static/image/"+image[토너먼트1[순서[count*2-2]]]; //순서라는 배열로 인해 이미지가 보여짐
    right.src="./static/image/"+image[토너먼트1[순서[count*2-1]]];
    leftText.innerHTML=kind[토너먼트1[순서[count*2-2]]];
    rightText.innerHTML=kind[토너먼트1[순서[count*2-1]]];
}
