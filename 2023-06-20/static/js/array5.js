let num=new Array();//화면에 표시되는 숫자 저장배열
let num2=new Array();//숫자가 출력될 위치 저장 배열
function init(){ //초기화
    //중복없이 랜덤값 넣기
    //indexOf를 이용해서 -1이 나오면 일치하는게 없다.
    //즉 중복되는 숫자가 없다는 뜻이니까 배열에 저장
    num.push(Math.floor(Math.random()*10)+1);
    for(var i=1; i<=3; i++){
        var temp=Math.floor(Math.random()*10)+1;
        if(num.indexOf(temp)==-1){
            num.push(temp);
        }else{
            i--;
        }
    }
    num2.push(Math.floor(Math.random()*8));
    for(var i=1; i<=7; i++){
        var temp=Math.floor(Math.random()*8);
        if(num2.indexOf(temp)==-1){
            num2.push(temp);
        }else{
            i--;
        }
    }
}



window.onload=function(){
    /*let pic1=document.getElementById("pic1");
    let pic2=document.getElementById("pic2");
    let pic3=document.getElementById("pic3");
    let pic4=document.getElementById("pic4");
    let pic5=document.getElementById("pic5");
    let pic6=document.getElementById("pic6");
    let pic7=document.getElementById("pic7");
    let pic8=document.getElementById("pic8");

    pic1.addEventListener("click", same_search);
    pic2.addEventListener("click", same_search);
    pic3.addEventListener("click", same_search);
    pic4.addEventListener("click", same_search);
    pic5.addEventListener("click", same_search);
    pic6.addEventListener("click", same_search);
    pic7.addEventListener("click", same_search);
    pic8.addEventListener("click", same_search);*/
    
    //class로 가져오게되면 배열로 저장되어진다
    init(); //초기화 함수 실행
    let start=document.getElementById("start");
    start.addEventListener("click",play);

    let pic=document.getElementsByClassName("picture");
    for(var i=0; i<pic.length; i++){
        pic[i].addEventListener("click", same_search);
    }
}
function play(){
    let pic = document.getElementsByClassName("back");
    for( var i=0; i<pic.length; i++){
        pic[num2[i]].innerHTML = num[i%4] ;
    }
    setTimeout(function(){
        let pic = document.getElementsByClassName("back");
        for(var i=0; i<pic.length; i++){
            pic[i].style.display="none";
        }
    },2000);//(함수,시간);

}

function  same_search(){
    
}
