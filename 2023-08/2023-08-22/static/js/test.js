$(function(){
    $("#detail_bt").click(function(){
        $(".search_detail").slideToggle(50);
    });
    $.getJSON("./data/test.json",function(data){
        var teacher = data.담임;
        $("#main_title").text(data.학교명);
            $.each(data.학생,function(i,item){
                // console.log(data.담임);
                var 담임='';
                for (var t in teacher){
                    if(teacher[t].반==item.반){
                        담임=teacher[t].이름;
                        break;
                    }
                }
                $("#list_wrap").append(
                    "<div class='info'>"+
                    "<ul class='bt'>"+
                    "<li class='name'>이름 : "+item.이름+"</li>"+
                    "<li class='ban'>"+item.반+"반</li>"+
                    "<li class='myteacher'>담임 : "+담임+"</li>"+
                    "<li class='t'>키 : "+item.키+"cm</li>"+
                    "<li class='e'>시력 : 좌"+item.시력.slice(0,3)+" 우"+item.시력.slice(4)+"</li>"+
                    "<li class='w'>몸무게 : "+item.몸무게+"kg</li>"+
                    "</ul></div>"
                    );
                    console.log(data.학생);
            });
        
        });
        $("#word").on("keyup",default_search);
        $("#word").next().click(default_search);

        $(".search_detail")
    });
function default_search(){
    var word = $("#word").val();

    $(".info").filter(function(){
        
        $(this).toggle($(this).find(".name").text().indexOf(word)>-1);
    });
}