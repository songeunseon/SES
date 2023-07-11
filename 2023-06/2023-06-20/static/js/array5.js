let show=false; //start버튼 클릭 유무
let num=new Array();//화면에 표시되는 숫자 저장배열
let num2=new Array();//숫자가 출력될 위치 저장 배열
function init(){ //초기화
    //중복없이 랜덤값 넣기
    //indexOf를 이용해서 -1이 나오면 일치하는게 없다.
    //즉 중복되는 숫자가 없다는 뜻이니까 배열에 저장
    //배열이 0부터 하니까 제일가까운 -1 을 이용
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
        show=true; //start버튼클릭했다 라는 의미
    },2000);//(함수,시간);
}
function  same_search(){
    if(!show){//show변수가 false라면 not연산에 의해 ture가 적용
              //show변수가 true라면 not연산에 의해 false가 적용
        alert("start버튼을 클릭하세요");
        return; // start버튼을 클릭하지 않았으면 same_search함수를 실행시키지 않는다
    }
    //this.style.background="red";
    var child=this.childNodes[0]; //childNodes모든자식태그를 배열로 저장됨
    child.style.display="inline";
}
//자식태그 가져오는 방법:
//children- 모든 자식태그를 htmlcollextion배열로 가져온다
//childNodes- 모든 자식태그를 nodelist의 배열로 가져온다
//firstChild- 첫번째 자식 태그
//lastChild- 마지막 자식 태그

//getElementById() 또는 getElementsByClassName()등 을 사용하면
//태그의 객체라는 것이 반환된다.
//태그의 객체를 변수에 담아서 사용해왔다.
//자바스크립트에서는 html태그를 element, 요소 또는 객체라고 한다.
//객체를 표현하는 방법중에 자기 자신을 의미하는 this가 있다.
//same_search함수를 실행 시킨건 td태그이다.
//즉 td라는 객체에 의해 same_search함수가 실행된것이다.
//same_search함수안에서 this라고 사용하면 same_search함수를 실행시킨
//td태그를 의미한다.
