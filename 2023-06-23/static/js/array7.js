/*
    현재 태그(엘리먼트)의 다음 태그를 가져오는방법
    -.nextSibling (형제태그를 의미한다.)
    태그(엘리먼트) 객체에 클래스를 추가하는 방법
    -element.classList.add('클래스이름');
    클래스 여러개 추가
    -element.classList.add('클래스이름','클래스이름');
    클래스 이름 변경
    -element.classList.replace('변경전이름','변경후이름');
    클래스 삭제
    -element.classList.toggle('삭제할 클래스 이름');
    조건에 따라 클래스 삭제
    -element.classList.toggle('삭제클래스이름',조건식);
    태그(element)객체에 클래스가 있는지 확인방법
    -element.classList.contains('클래스이름');
    -해당 클래스이름이 있다면 true없다면 false

    dataset
    -HTML5부터는 태그에 데이터를 담을수있는 개념이 생겼다.
    -데이터 속성은 태그에 data- 로 시작한다.
    -dataset은 브라우저에 어떠한 행동도 관여하지 않기 때문에
    자유롭게 데이터를 넣어 사용하면 된다.
    -자바스크립트에서 활용을 할 수 있고 html에서는 다른 속성처럼
    태그에 영향을 주지않는다.
    -다른 속성이라 하면 width,height,style 등등
    <div width="200"> -> 이거는 width라는 속성에 의해
    div의 크기에 영향을 준다.
    하지만 dataset은 영향을 주지 않는다.

    window.innerWidth; 브라우저의 너비
    window.innerHeight; 브라우저의 높이
    window.outerWidth; 브라우저의 전체너비
    window.outerHeight; 브라우저의 전체높이

    브라우저의 크기가 변경되면 동작하는 함수 - resize();
    
    문자열에서 split함수를 쓰면 배열로 저장이 된다.
*/
window.onresize=function(){
    var wd=window.innerWidth;
    if(wd>786){
        var list=document.getElementsByClassName("menu_list")[0]
        list.style.display="none";
        list.dataset.show='1';
    }
}
let lotto=new Array(); //역대 당첨 번호 저장될 배열

window.onload=function(){
    
    //화면이 전부 로딩 되면 시작하는 함수
    var icon=document.getElementsByClassName("strapIcon");
    icon[0].addEventListener("click",open_close)
        //var list=document.getElementsByClassName("menu_list");
        //list[0].style.display="block"; (그림맞추기할때 썻던것)
        content=document.querySelector("#content");

        var file=document.querySelector("#lotto");
        file.addEventListener("input",function(e){
            let target=e.target; //선택된 파일참조
            let files=target.files; // 선택 된 파일은 배열의 형식으로 저장된다
            //첫번째 파일 참조를 해야 내가 선택한 파일을 읽을수 있다.
            let reader=new FileReader();
            reader.addEventListener("load",function(){
                var str=reader.result;
                var temp=str.split("\n");

                for (var i in temp){ //배열에서만 사용할수있는 조건식, i->인덱스가 들어감
                    lotto.push(temp[i].split("\t"));                    
                }
                alert(lotto[0][3]);
            });
            reader.readAsText(files[0]);
        });
}
//배열은 3차원 배열까지만 사용한다 (정말 필요하면 3차원이상 쓰긴하지만)

function open_close(){
    var list=document.getElementsByClassName("strapIcon")[0].nextSibling.nextSibling; //(형제로 찾는 법),
    //.nextSibling이 두번들어간이유는 엔터나 공백도 객체로 인식하기때문에
    //지금상황에서는 엔터가 객체로 인식되어서 두번입력하였당
    // var isAcitve=list.classList.contains("list_active");
    // if(isAcitve)
    //     list.classList.toggle("list_active");
    // else
    //     list.classList.add("list_active");
    var show=list.dataset.show;
    if(show==1){
    list.style.display="block";
    list.dataset.show='0';
    }else{
        list.style.display="none";
        list.dataset.show='1';
    }
}

let content=null;
/*
function win_confirm(){
    var out="<div id='input_box'>";
    var input="";
    for (var i=1; i<=6; i++)
        input += "<input type='number' class='mynum'>";
        out+=input +"</div>";
        out+="<div id='bt'><button onclick='check()'>확인</button></div>";
        out+="<div id='result'></div>";
        content.innerHTML=out;
}
*/
function make_num(){
        if(lotto.length==0){
            alert("파일 먼저 좀 열어라")
            return;
        }

        var out="<table class='makeTable'>";

        for(var n=1; n<=5; n++){
        let lucky_num=new Array();
        lucky_num.push(Math.floor(Math.random()*45)+1);
        for(var i=1; i<6; i++){
            var num=Math.floor(Math.random()*45)+1;
            if(lucky_num.indexOf(num)==-1){
                lucky_num.push(num);
            }else {
                i--;
            }
        }
        //두개의 값을 계산하여 +라면 자리바꾸기(더블정렬)
        //(양수 음수 0 으로 나뉜다 음수나 0일때는 자리를 바꾸지않는다)
        //총 데이터 개수의 -1번 
        lucky_num.sort(function(a,b){return a-b;}) //오름차순
        //내림차순도 할수있다 b-a

        //로또 숫자를 태그에 담아주기
        
        out += "<tr>";
        out +="<td class='numTd'>"+n+".</td>";
        for(var i=0; i<lucky_num.length; i++){
            out += "<td class='numTd'>"+lucky_num[i]+"</td>";
        }
        out += "</tr>";
        
        //짝, 홀 갯수 , 총합
        var even=0, odd=0; //even 짝 , odd 홀
        var total=0;
        for(var i=0; i<lucky_num.length; i++){
            total += lucky_num[i];
            if(lucky_num[i]%2===0){
                even++;
            }else
                odd++;
        }

        //산술적 복합성 값 구하기
        var ac=new Array();
        for(var i=lucky_num.length-1; i>=1; i--){
            for(var k=i-1; k>=0; k--){
                var tmp=lucky_num[i]-lucky_num[k];
                if(ac.indexOf(tmp)==-1)
                    ac.push(tmp);
            }
        }
        //역대 당첨번호와 비교하기
        //lotto는 2차원 배열 - 1차원 배열이 두개 있기 때문에 인덱스도 두개다.
        //i변수에는 첫번째 인덱스를 k변수에는 두번째 인덱스를 표현한다.
        for(var i in lotto){ 
            for(var k=2; k<=7; k++){ //실제데이터가 들어있음
                if(ac.indexOf(lotto[i][k])!=-1){
                    //역대 당첨번호와 같은 숫자가 ac배열에 있다면 ac배열에서 삭제하기
                    //배열에 저장되어있는 데이터를 삭제하는 방법
                    //1.배열이름.pop()
                    //2.특정인덱스의 데이터를 삭제-배열이름.splice(인덱스,갯수)
                    //  삭제할 데이터의 인덱스와 해당 인덱스 부터 몇개 삭제할것인지 갯수
                    var index=ac.indexOf(lotto[i][k]);
                    ac.splice(index,1);

                }
            }
        }


        out +="<td colspan='7'>"+
        "AC :"+ (ac.length-5)+" "+
        "총합 : "+total+" "+ //공백부분 띄어쓰기부분임
        "홀/짝 :"+odd+"/"+even+"</td>";
    } // 5번 반복하는 for문 끝
    out += "</table>";

    //출력
    content.innerHTML=out;
}
/*
function num_count(){
    alert("출현횟수");
}
*/