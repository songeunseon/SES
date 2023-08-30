let isLogin=false;


$(function(){
    $.getJSON("./data/question.json",function(data){
        $.each(data,function(i,item){
            $("#qs").append(
                "<tr class='qstr'>"+
                "<td class='qsNum a'>"+item.id+"</td>"+
                "<td class='qsTit b'>"+item.title+"</td>"+
                "<td class='qsWri c'>"+item.writer+"</td>"+
                "<td class='qsDate d'>"+item.date+"</td>"+
                "<td class='qsAns e'>"+(item.to==0? '미답변' : '답변완료')+"</td>"+
                "</tr>"
            );
            // console.log(data);
        });
    })
    $("#word").keyup(search);


    isLogin=getCookie("isLogin")=="true"? true:false;
    var id=getCookie("id");
    
    var login='';

    if(isLogin){//로그인 성공
        login=`<div class="user">
        <p>${id}</p><a href="/?part=logout">로그아웃</a>
        </div>`;
    }else{ // 로그인 실패 또는 로그인 안한 상태
        login='<div class="login_bt"><a href="/login">로그인</a></div>';
    }
    $("#side").append(login);

    $(".modalBackground").click(function(){ 
        $(this).parent().hide();//회색부분 아무데나 클릭하면 문의글 작성 모달창 닫기
    })
});
function search(){
    var wr = $("#word").val();
    $(".qstr").filter(function(){
        var w = $(this).find(".qsWri").text().indexOf(wr)>-1;;
        var t = $(this).find(".qsTit").text().indexOf(wr)>-1;
        
        $(this).toggle(w||t);
    });
}
function questionWrite(){
    if(isLogin){ //로그인 성공
        $("#qsModal").show();
    }else{//로그인 안한상태
        var isOK = confirm("로그인 후 문의하기 를 작성할수 있습니다 \n로그인 하시겠습니까?");
        if(isOK){
            location.href='/login';
            if(page==='login'){
                _url='/src/question.html';
            }
        }
    }
}
function qsSave(){
    $("#qsModal").hide(); //문의글 작성 모달창 닫기
    //json형식으로 값 전달하기 만들기
}