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
            alert(lotto[0][3]);
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
    //결과확인 버튼을 클릭하면 input태그에 입력한 숫자를 모두 선택번호 td에 출력하기
    var input=document.getElementsByClassName("input1");
    var num_arr=new Array();

    for(var i=0; i<input.length; i++){
        num_arr.push(input[i].value);
    }
    var resN=document.getElementsByClassName("resultNumber");
    resN[0].innerHTML=num_arr;
}