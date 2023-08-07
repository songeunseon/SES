$(function(){
    $(".filterMore").click(function(){
        $(this).toggleClass("moreDown");
        $(this).toggleClass("moreUp");
        $(".filterDetail").slideToggle();
    });
    $.getJSON("./전국건강증진센터표준데이터.json",function(data){
        const data_list=data.records;
    
    $.each(data_list,function(i,item){
        $("#section").append("<div class='item_short'><div class='item_image'>"+
        "<img src='https://loremflickr.com/200/200/health?random="+i+"'></div>"+
        "<div class='item_detail_box'><ul class='item_detail'>"+
        "<li>"+item.건강증진센터명+"</li><li>"+item.소재지도로명주소+"</li>"+
        "<li>"+item.건강증진업무내용+"</li><li>"+item.건강증진센터구분+"</li>"+
        "<li>"+item.운영기관명+"</li><li>"+item.운영기관전화번호+"</li></ul></div></div>"
        );
    });
        // var task=new Array;
        // $.each(data_list, function(i,item){
        //     task.push(item.건강증진업무내용);
        //     console.log(item.건강증진업무내용);
        // });
    });
    $("#searchWord").on("keyup",function(){
        var word = $(this).val();
        $(".item_short").filter(function(){
            $(this).toggle($(this).text().indexOf(word) > -1);
        });
    });
});
    //toggle은 show와 hide를 번갈아가며 보여주는것
    //toggle에 ture를 넣으면 show, false를 넣으면 hide
    //indexOf는 배열에 몇번인덱스에 있는지 알려주는 녀석인데
    //배열에 없는걸 몇번인덱스인지 알려달라고하면 -1 을 알려줘요
    //배열에 없는 값이라고 그래서 인덱스가 없으니까 인덱스가 아닌-1을 줘요
    //-1보다 크면  배열에 존재하는값이고
    //아니라면 배열에 존재하지 않는값
    //문자열도 배열이기때문에 문자열에 인덱스오프 하면
    //문자열에 특정 문자열포함여부를 알수있어요
    
    // input 태그에 키보드를 눌렀다가 떼는 경우에 동작 - keyup
    // input 태그에 키보드를 눌렀을때 동작 - keydown
 
//검색창에 정신이라고 입력을 하면 정신이라고 글씨가 들어가있는 항목만 나와야하게 ! 숙제
//8월 1일 깃허브 참고
