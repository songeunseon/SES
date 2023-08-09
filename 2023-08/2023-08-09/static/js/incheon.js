let fish = [];
let fish_kind = []; //어초종류
let fish_amount = []; //어초수량
let year = []; //설치년도

async function getData(){
    var data = await fetch("https://api.odcloud.kr/api/15031992/v1/uddi:3c46e4ef-78dc-4da6-97b1-ad226624eff5_201911131644?page=1&perPage=500&serviceKey=j6fUdSWZZSZdJsHMa5%2FYpFE3f1uV6u0%2BwJA%2BDHpL5PvrUjKgL48S7DA%2BlR6jK6%2F0GhIN9SNExqmWq3EKjKWVTg%3D%3D").then((res)=>res.json().then((r)=>r));
    // console.log(data.data); //data에 내용이 들어있어서
    return data.data;
}

$(async function(){
    fish = await getData();

    var kind = new Set(); //지역변수(임시사용)
    var amount = new Set();
    var y = new Set();

    /*set에 추가*/
    $.each(fish,function(i,item){ //(인덱스, 값)
        kind.add(item.어초종류);
        amount.add(Number(item.어초확인수량));
        y.add(Number(item.설치년도));
        $("#list").append("<div class='fish_item'>"+
        "<span class='num'>"+item.연번+"</span>"+
        "<span class='fyear'>"+item.설치년도+"</span>"+
        "<span class='ftype'>"+item.어초종류+"</span>"+
        "<span class='famount'>"+item.어초확인수량+"</span>"+
        "<span class='flocation'>"+item.지역명+"</span></div>");
    });

    /* 배열로 변경*/
    /*1*/fish_kind = Array.from(kind); 

    /*2*/fish_amount = Array.from(amount); 
    fish_amount.sort(function(a,b){return a-b;});
    var inc = parseInt(fish_amount.length/5);
    fish_amount = [Math.round(fish_amount[inc]/10)*10, Math.round(fish_amount[inc*2]/10)*10, Math.round(fish_amount[inc*3]/10)*10, Math.round(fish_amount[inc*4]/10)*10];

    /*3*/year = Array.from(y); 

    // var min = Math.min(...fish_amount); //fish_amount안에 가장작은값
    // var max = Math.max(...fish_amount); //fish_amount안에 가장 큰 값
    // fish_amount = [];

    /*체크박스 만들기*/
    make_checkbox(year,"#install_year", "year");
    make_checkbox(fish_amount,"#fish_amount", "amount");
    make_checkbox(fish_kind,"#fish_kind", "kind");

    $("input[type=checkbox").change(search);

    /*확인*/
    // console.log(fish_amount);
    //개발자 모드 확인시 prototype에 Array라고 떠야함

});
function search(){
    let qkind=new Array();
    let qamount=new Array();
    let qyear=new Array();
    $("input[name=kind]:checked").each(function(){qkind.push($(this).val());});
    $("input[name=amount]:checked").each(function(){qamount.push($(this).val());});
    $("input[name=year]:checked").each(function(){qyear.push($(this).val());});
    
    $(".fish_item").filter(function(){
        var isShow=true;
        var idx=$(this).index();

        if(qkind.length!=0 && isShow){
            if(qkind.indexOf(fish[idx].어초종류) == -1) isShow=false
        }

        if(qamount.length!=0 && isShow){
            if(Number(fish[idx].어초확인수량) >= Number(Math.min(...qamount))) isShow=true;
            else isShow=false;
        }
        if(qyear.length!=0 && isShow){
            if(qyear.indexOf(fish[idx].설치년도) == -1) isShow=false
        }
        
        $(this).toggle(isShow);
        
    });
}

/*함수로 빼기*/
function make_checkbox(arr,id,name){ //arr,id,name이라는 매개변수로 받기
    $.each(arr,function(i,data){
        $(id).append("<span class='chk'><input type='checkbox' name='"+name+"' value='"+data+"'>"+
        "<label>"+data+"</label></span>");
    });
}






/*set 사용방법*/
// let st=new Set(["김승겸","김선향","송은선","신상수","임민지","김선향"]);
// st.add("안태균"); //추가
// st.delete("송은선"); //삭제
// st.has("신상수"); //set안에 값이 존재하면 true없으면 false
// st.size;//set의 크기
// st.clear(); //셋 비우기
// // Set은 중복을 허용하지 않음 (중복되면 한개만 보여짐) ,집합을 표현할때 사용?, 단일검색
// console.log(st);