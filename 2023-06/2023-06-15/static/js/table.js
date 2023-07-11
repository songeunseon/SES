//onclick은 클릭 ondblclick은 더블클릭
//항상 하나의 명령과 값을 입력하고 확인하고 그다음으로 넘어가야해~

//전역 변수와 지역변수의 차이

/*
let a=10;
function select(){

    var s=10;
    a++;
    alert(a);
}*/

//두개의 함수를 통해 전역과 지역 사용비교

/*
function select(){
    var a=100; //지역변수
    a++;
    return a; //a변수에 저장되어있는 값이 넘어가는것!!!!!!!!!
              //다른 함수에 있는 지역변수의 값을 가져올수있는 방법은 return뿐이다!!
}
function easy(){
    alert("출력 : "+ select());
}
*/
/*
let a=100;
function select(){
    a++;
}
function easy(){
    select();
    alert("출력 : "+ a);
}
*/

//3개 함수 연계
/*
function select(v){
    alert(v);
}
*/
//숫자나 연산자를 클릭하면 input태그에 출력

/*function select(v){
    document.getElementById("result").value=v;
}*/
//클릭한 숫자나 연산자가 input태그에 계속 나오게 만들기

let out=""; //전역변수-내가 클릭한 숫자나 연산자를 쌓아두기 위해서
            //전역변수가 아니고 지역변수로 생성시 클릭할때마다 새로운
            //지역변수가 생성된다. 이전에 클릭했던 내용은 사라진다.

let op="";  //연산자를 저장할수있는 전역변수
            //전역으로 만드는 이유는 연산자 입력 후 두번째 숫자를 입력하기 때문에
            //연산자를 함수의 종료와 함께 날려버리면 안되니까

let num1=0; //첫번째 피연산자
let num2=0; //두번째 피연산자

function select(val){
    if(val==="="){//계산결과를 보기위해 = 클릭했을경우 실행되는 if문
        out=calc(); //계산하기 위한 함수, 계산된 결과를 반환(return)할것이다.

    }else{
            out=out+val;
    //alert(  out.length);
    if(typeof(val)==='string'){//val 변수의 값이 문자열인지 확인(연산자 클릭한 경우)
        op=val;
    //    alert("연산자입니당");
    }
    if(op===""){ //op변수가 빈값이면 연산자를 클릭하기 전이다.
        num1=Number(out);   //첫번쩨 숫자는 연산자를 클릭하기 전까지가 첫번째 피연산자 이다.
                            //연산자 클릭한 이후부터는 두번째 피연산자 숫자가 들어와야 한다.
                            //연산자 이전과 이후가 구분이 되야 피연산자1 과 피연산자 2로 나누어줄수있다.
        }else{//op변수가 빈값이 아니라면 두번째 피연산자가 입력될것이다.

        var index=out.indexOf(op)+1;
        num2=Number(out.slice(index));
    //    alert(num2);
    }
    }
    document.getElementById("result").value=out;
}
function calc(){
    switch(op){
        case "+":
            return num1=num1+num2;
        case "-":
            return num1=num1-num2;
        case "*":
            return num1=num1*num2;
        case "/":
            return num1=parseInt(num1/num2); // /연산은 소수점도 나오니까
                                        // 정수만 나오게 하기위해 parseInt
    }
}

//7+8 하고 = 클릭하면 15가 출력된다
//15에 +클릭하고 4를 클릭하면 19가 나오게 하려면 어떻게 해야할까요?
