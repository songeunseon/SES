//func.js

//함수의 형태 4가지
//1. 입력과 출력이 없는 형태
//2. 입력은 있고 출력이 없는 형태
//3. 입력은 없고 출력만 있는 형태
//4. 입력과 출력이 있는 형태

//함수에서 입력이라는 것은 함수의 내용이 실행되기 위해서
//꼭 필요한 값이 있다면 함수 외부로부터
//값을 받는것을 입력 이라고 한다.
//전문 용어로 인자 인수, 매개변수 라고 한다.

//함수()안에 있는 놈이 매개변수(인자)이다.
//매개변수는 여러개 만들수있다. (a,b,c,d,e)
//매개변수(인자)가 5개이면 인수도 5개이여야한다

//함수에서 출력은 함수에서 생성된 값을
//다른 함수나 다른 곳에 보내고자 할경우에 사용된다.
//return을 사용해서 밖으로 내보낸다.

//웹에서 입력하는 모든값은 전부 텍스트이다.
//input 태그에 입력한 값을 자바스크립트로 가져오려면
//value로 속성을 사용해야한다.
//모든input태그에 값은 value에 저장되어있다.
//gerElement를 통해서 input태그를 가져오고
//가져온 input태그에서 value값을 뽑아내기

//return - 함수에 있는 값을 함수 밖으로 내보낼때 사용된다.
//  함수안에서 return이 실행되면 해당 함수를 종료 하고
// 값을 내보낸다.

// total이라는 함수 호출(실행)

//switch문은 if문과 다르게 조건식이 참이냐 거짓이냐에 따라
//동작하는 조건문이 아니다.
//switch문은 값을 넣어서 해당 값에 따라 동작하도록 선택하는 문이다.
//즉 여러분이 지금 사용하고 있는 vscode의 메뉴가 바로 switch문으로
//만들어진 것이다.
//메뉴에서 내가 폴더 열기를 선택하면 탐색창이 실행된다.
//즉 내가 선택한 메뉴에 따른 동작을 하는것이다.
//switch문에서 동작할 내용 선택은 case로 만들어준다.
//여러개의 case를 만들수있다.
/*
    switch(10){
        case 1:
            1을 선택하면 동작할 내용
        case 5:
            5를 선택하면 동작할 내용
        case 100:
            100을 선택하면 동작할 내용
        case 2:
            2를 선택하면 동작할 내용
        case 10:
            10을 선택하면 동작할 내용
    }
*/
function sum(a,b){
    alert(a+b);
    var  res =document.getElementById("sum_result");
    res.innerHTML=a+b+"<hr>";
}
function plus(){
    var n1=document.getElementById("num1");
    var n2=document.getElementById("num2");
    var res=document.getElementById("result2");
    res.innerHTML=Number(n1.value)+Number(n2.value);
    //res.innerHTML=Number(n1.value)+parseInt(n2.value);
}

function myage(){
var n=document.getElementById("birth_year").value;
var p=document.getElementById("age");
p.innerHTML=2023-Number(n);
}
function score_celc(){
    var kor=document.getElementById("kor");
    var mat=document.getElementById("mat");
    var mus=document.getElementById("mus");

    var res=document.getElementById("result3");

    if(kor.value=='' || !(kor.value>=0 && kor.value<=100)){
        alert("국어 점수 똑바로 입력 해라-_-ㅗ!")
        kor.focus();
        return;
    }else if(mat.value=='' || !(mat.value>=0 && mat.value<=100)){
        alert("수학 점수 똑바로 입력 하라고해찌!!")
        mat.focus();
        return;
    }else if(mus.value=='' || !(mus.value>=0 && mus.value<=100)){
        alert("음악 점수 똑바로 입력 해라고 쫌~!! 한번에 좀 하자")
        mus.focus();
        return;
    }
    var tot= total(Number(kor.value),Number(mat.value),Number(mus.value));
    var avg_val = avg(tot);

    res.innerHTML="총점 : "+tot+ "평균 :"+avg_val;
}
function avg(tot){//avg.tot = score_calc.tot
    return tot/3;
}
function total(k,m,s){
    return (k+m+s);
}

function my_minus_life(){
    var soju=document.getElementById("soju");
    var min=document.getElementById("minute");
    var hour=document.getElementById("hour");
    var day=document.getElementById("day");

    if(soju.value==""){
        alert("몇잔마셨는지 솔직하게 말해라")
        soju.focus();
        return;
    }
    var life=Number(soju.value)*2 *365 *20;
    min.innerHTML="단축수명 :" +life+ "분";
    hour.innerHTML="단축수명 :" +(life/60)+"시간";
    day.innerHTML="단축수명 :"+(life/60/24)+"일";
}

function my_order(){
    var main_menu=document.getElementById("night_snack");
    var side_menu=document.getElementById("side_menu");
    var alc=document.getElementById("alc");

    //출력 엘리먼트
    var order_list=document.getElementById("order_result");
    var out="";
    
    var temp=menu(main_menu.value); //메뉴입력시 판매하는 메뉴 입력하면
    //금액 (숫자)이 return되고, 판매하지 않는 메뉴 입력시 문자열이 return된다.
    out+=main_menu.value +"금액 :"+temp+"원<br>";
    var temp1=menu(side_menu.value);
    out+=side_menu.value +"금액 :"+temp1+"원<br>";
    var temp2=menu(alc.value);
    out+=alc.value +"금액 :"+temp2+"원<br>";


    if(typeof(temp)==='string'||typeof(temp1)==='string'||typeof(temp2)==='string'){ //temp의 값 타입이 문자열이라면
        alert("판매하지않는 메뉴입니다.");
        main_menu.value=''; //<-이렇게 해주면 야식메뉴 input의 값이 지워진다
        side_menu.value='';//<-이렇게 해주면 사이드메뉴 input의 값이 지워진다
        alc_menu.value='';//<-이렇게 해주면 주류 input의 값이 지워진다
        main_menu.focus();
        return;
    }
    order_list.innerHTML=out;
}
function menu(name){
    var money=0;
    switch(name){
        case"족발":
            money=28000;
            break; //switch case에서 break를 하지않으면
                   //밑에 있는 case도 실행된다.
        case"반반치킨": money=22000; break;
        case"무뼈닭발": money=19000; break;
        case"페퍼로니피자": money=18000; break;
        case"짬뽕탕": money=18000; break;
        case"포케": money=15000; break;
        case"감자튀김": money=3000; break;
        case"염통꼬치": money=4000; break;
        case"타코야키": money=6000; break;
        case"치즈볼": money=5000; break;
        case"테라": money=4000; break;
        case"피치하이볼": money=8000; break;
        case"진로": money=4000; break;
        case"새로주": money=4000; break;
        case"카스": money=4000; break;
        case"발렌타인 30살": money=1100000; break;
        case"시바스리갈":money=59800; break;
        default: //case에 없는 값 입력시 default가 실행된다.
            return "판매하지 않는 메뉴입니다.";
    }
    return money;
}

/*오늘의 과제
계림 카페 주문하기
주문내용은 음료명, 아이스 또는 핫, 사이즈(m,L)
음료 하나만 주문이 아니라
여러개 주문내역이 나와야 한다.
예)
아메리카노, 아이스 , M, - 2000원
수박주스, 아이스 , M, - 4500원


힌트- 모든 함수에서 사용할수있는 변수를 생성하려면 함수밖에 만들면 된다.
*/
