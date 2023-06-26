window.onload=function(){
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
function select_count(){
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
        
        for(var i=0; i<input.length; i++){
            if(input[i].value!=''){
                var val=input[i].value;
                if(win_num.indexOf(parseInt(val))==-1){ //내가 입력한 번호는 당첨X
            num_arr.push("<span>"+input[i].value+"</span>");
                }else{ //내가 입력한 번호가 당첨번호O
                    num_arr.push("<strong class='red'>"+val+"</strong>");
                }
            }
        }
        if(num_arr.length==6){
        var resN=document.getElementsByClassName("resultNumber");
        resN[line-1].innerHTML=num_arr;
        }
    }
}