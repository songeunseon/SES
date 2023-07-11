//is- 맞냐아니냐 할때
window.onload=function(){
    var num645=document.getElementsByClassName("num_645");
    for(var i=0; i<num645.length; i++){
        num645[i].addEventListener("keyup",function(e){
            if(e.keyCode<48 || (e.keyCode >57 && e.keyCode<96) || e.keyCode>105){
                return;
            }
            var n= parseInt(this.value);
            if(!(1<=n && n<=45)){
                alert("1~45 숫자만 입력하세요.");
                this.value='';
                this.focus();
            }
        });
    }
    var drwNo=document.querySelector("#drwNo");
    var btnDefault=document.querySelector("#btnDefault");
    var btnSearch=document.querySelector("#btnSearch");
    
    btnDefault.addEventListener("click",data_default);
    btnSearch.addEventListener("click",data_search);

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
        });
        reader.readAsText(files[0]);
    });
    var opt="";
    for(var i=1073; i>=1; i--)
        opt+="<option>"+i+"</option>";
    drwNo.innerHTML=opt;
    drwNo.addEventListener("change",select_count);


}
let sel_count=0;//발표회차 선택
function select_count(){ //select 태그의 값을 변경하면 실행되는 함수
    sel_count=this.selectedIndex;
}
function data_default(){

}
function data_search(){
    if(lotto.length==0){
        alert("로또파일먼저 열으라");
        return;
    }
    let win_num=new Array();
    for(var i=2; i<=7; i++){
        win_num.push(parseInt(lotto[sel_count][i]));
    }
    for(var line=1; line<=5; line++){

    //결과확인 버튼을 클릭하면 input태그에 입력한 숫자를 모두 선택번호 td에 출력하기
        var input=document.getElementsByClassName("input"+line);
        var num_arr=new Array();
        var bouns_str="<span>"+lotto[sel_count][8]+"</span>"; //보너스에 관한 내용변수
        var win_cnt=0; //일치여부 갯수 저장변수
        var isBouns=false; //보너스번호가 있나없나
        var rank=0; //등수

        for(var i=0; i<input.length; i++){
            if(input[i].value!=''){
                var val=input[i].value;
                if(win_num.indexOf(parseInt(val))==-1){ //내가 입력한 번호는 당첨X
            num_arr.push("<span>"+input[i].value+"</span>");
                }else{ //내가 입력한 번호가 당첨번호O
                    num_arr.push("<strong class='red'>"+val+"</strong>");
                    //여기에서 당첨번호가 몇개인지 구하기
                    win_cnt++;
                }
                //여기에 보너스번호 일치여부에 관한 코드작성
                if (val==parseInt(lotto[sel_count][8])){
                    //if문이 참이라면 내가 입력한 숫자가 보너스번호와 일치한다.
                    isBouns=true;
                }
            }
        }
        switch(win_cnt){
            case 6: rank=1; break; //당첨번호일치 6개 - 1등
            case 5: if(isBouns) rank:2; //당첨번호 일치 5개에 보너스 - 2등
                    else rank=3; break; //당첨번호일치 5개 - 3등
            case 4: rank=4; break; //당첨번호일치 4개 - 4등
            case 3: rank=5; break; //당첨번호일치 3개 - 5등
            default:
                rank="X";//당첨번호일치 2개 이하면 X
        }
        if(isBouns){
            bouns_str="<strong class='red'>"+lotto[sel_count][8]+"</strong>";
            win_cnt=win_cnt!=6? win_cnt+"+Bouns":win_cnt;
        }
        if(num_arr.length==6){
        var resN=document.getElementsByClassName("resultNumber");
        resN[line-1].innerHTML=num_arr;

        //여기에 보너스번호 출력코드 작성
        var bouns=document.getElementsByClassName("resultBouns");
        bouns[line-1].innerHTML=bouns_str;
                
        //resultBouns
        //여기에 일치갯수 출력코드 작성 resultNumberSu
        var NumberSu=document.getElementsByClassName("resultNumberSu");
        NumberSu[line-1].innerText=win_cnt;

        var grade=document.getElementsByClassName("resultNumberGrade");
        grade[line-1].innerHTML=rank;
        }

    }
}
