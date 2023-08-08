//스크립트에서 배열을 생성할때는 const를 많이 사용한다
//배열의 주소는 변하지않고 값만 변동이 있기 때문에 배열의 주소변조를 막기위해 const를 사용한다
/*
    자바스크립트 비동기 - aysnc , await , promose 
    자바스크립트에서 비동기 처리 3가지 방법
    1. 콜백함수 - 무한 콜백, callback hell (콜백으로 비동기처리하는 방법은 요새는 잘 사용안함)
    2. promise - 
    3. aysnc/await - 


    setInterval, setTimeout, 외부데이터를 가지고오는경우 비동기적 상황 (같이 움직이는 것이 비동기)


    */
//비동기는 여러개의 작업을 동시에 실행시킬수있는 것

let data_list=new Object(); //json데이터 저장할 전역변수
// $.getJSON("./전국건강증진센터표준데이터.json",function(data){
//     data_list=data.records;
// });
async function getData(){
    var data= await fetch("./전국건강증진센터표준데이터.json").then(function(res){ //fetch로 json파일을 가져올수있다
        return res.json();}).then(function(r){return r;});
        console.log(data.records);
        return data.records;
//     // var d="";
//     // $.getJSON("./전국건강증진센터표준데이터.json",function(data){
//     //     return data.records;
//     // });
//     // return d;
}

/*
function getData(){
    return new Promise(function(resolve, reject){
    $.getJSON("./전국건강증진센터표준데이터.json",function(data){
        resolve(data.records);
        });
    });
}*/
$(async function(){
    $(".filterMore").click(function(){
        $(this).toggleClass("moreDown");
        $(this).toggleClass("moreUp");
        $(".filterDetail").slideToggle();
    });
    data_list=await getData();
    view(data_list);

        // var task=new Array;
        // $.each(data_list, function(i,item){
        //     task.push(item.건강증진업무내용);
        //     console.log(item.건강증진업무내용);
        // });
    // getData().then(function(data){console.log(data);});
    
    

//전체 텍스트에 대한 검색이 아니라
//소재지 주소와 업무내용에 한해서만 검색이 가능하게 변경하시오
    $("#searchWord").on("keyup",function(){
        search();
        // var word = $(this).val(); 
        // //const 내가 입력한 내용이 변경되는것을 막기위해서 사용
        // //var 도 let도 사용은 가능하다
        // $(".item_short").filter(function(){
        //     var addr = $(this).find(".item_detail").children("li:eq(1)"); //주소 찾기
        //     var task = $(this).find(".item_detail").children("li:eq(2)"); //업무내용 찾기
        //     var hasAddr = addr.text().indexOf(word) > -1; // !=
        //     var hasTask = task.text().indexOf(word) > -1; // !=
        //     $(this).toggle( hasAddr || hasTask); 
        //     //둘중하나라도 나온다면 show해야하니까 or연산자 사용
        // });
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
    
    //내 함수안에서 그때의 this는 객체 자기 자신을 표현하는 것
    //안그러면 반복문 돌려찾아야해서 시간이 오래걸린다
    
    // input 태그에 키보드를 눌렀다가 떼는 경우에 동작 - keyup
    // input 태그에 키보드를 눌렀을때 동작 - keydown
    
    $(".sort_obj").click(function(){
        $(this).toggleClass("asc"); //클릭한 녀석이 this (this는 현재 사용되는있는 녀석이 this)
        $(this).toggleClass("desc"); //클릭한 녀석이 this (this는 현재 사용되는있는 녀석이 this)
        
        var name = $(this).data("name"); //기준으로 정렬

        const sort_type= {centerName:"건강증진센터명", addr:"소재지도로명주소", nurseCount:"간호사수", doctorCount:"의사수"};
        var has = -1;
        if($(this).hasClass("asc")) has=1;
        
        // console.log(sort_type[name]); //배열로 value를 뽑아낼수있다

        data_list.sort(function(a,b){ //문자정렬
            if(a[sort_type[name]]>b[sort_type[name]])return 1*has;
            if(a[sort_type[name]]<b[sort_type[name]])return -1*has;
            if(a[sort_type[name]]===b[sort_type[name]])return 0;
        });

        view(data_list);
        
        });
    /*상세검색 부분*/
    $("input[type=checkbox]").change(function(){ //체크가 들어가도 해지되도 change이벤트 발생
        search();
    });

    $("input[type=radio]").change(function(){ //체크가 들어가도 해지되도 change이벤트 발생
        search();
    });
    
        // var value= new Array();
        // $("input[name=classify]:checked").each(function(){
        //     value.push($(this).val());


        // var value = $(this).val();
        // var checked = $(this).prop('checked');
        // console.log(checked);
        // value= value.substring(0,value.length-1);//맨뒤에 , 제거
        // // console.log(value);


        // $.each(data_list,function(i,item){
        //     if($(".item_short").eq(i).css("display")!="none"){
        //         if(value.indexOf(item.건강증진센터구분)==-1)
        //         $(".item_short").eq(i).hide();
        //     }
        // });
    });

    /* 검색에 필요한 부분 */
    function search(){
        const word = $("#searchWord").val(); 
        //const 내가 입력한 내용이 변경되는것을 막기위해서 사용
        //var 도 let도 사용은 가능하다
        let classify=new Array();
        let location=new Array();
        let task=new Array();
        let nurse=new Array();
        let social=new Array();
        $("input[name=classify]:checked").each(function(){classify.push($(this).val());});
        $("input[name=location]:checked").each(function(){location.push($(this).val());});
        $("input[name=task]:checked").each(function(){task.push($(this).val());});
        $("input[name=nurse]:checked").each(function(){nurse.push($(this).val());});
        $("input[name=social]:checked").each(function(){social.push($(this).val());});
        //배열의 크기가 0인 녀석은 체크값이 없는 녀석

        $(".item_short").filter(function(){

            var isShow=true;
            var idx=$(this).index();
            
            if(word!=''){
                var addr = $(this).find(".item_detail").children("li:eq(1)"); //주소 찾기
                var task1 = $(this).find(".item_detail").children("li:eq(2)"); //업무내용 찾기
                var hasAddr = addr.text().indexOf(word) > -1; // !=
                var hasTask = task1.text().indexOf(word) > -1; // !=
                isShow= hasAddr || hasTask; 
                //둘중하나라도 나온다면 show해야하니까 or연산자 사용
            }

            if(classify.length!=0 && isShow){ //센터구분상세
                if(classify.indexOf(data_list[idx].건강증진센터구분)==-1) isShow=false;
            }
            if(location.length!=0 && isShow){ //주소상세
                isShow=false;
                for(var i=0; i<location.length; i++){
                    if(data_list[idx].소재지도로명주소.indexOf(location[i]) >-1 ){
                        isShow=true; break;
                    }
                }
            }

            if(task.length!=0 && isShow){ //업무상세
                isShow=false;
                for(var i=0; i<task.length; i++){
                    if(data_list[idx].건강증진업무내용.indexOf(task[i]) >-1){
                        isShow=true; break;
                    }
                }
            }
            if(nurse.length!=0 && isShow){ //간호사수 상세
                if(Number(data_list[idx].간호사수) >= Number(nurse[0])) isShow=true;
                else isShow=false;
            }
            if(social.length!=0 && isShow){ //사회복지사수 상세
                if(Number(data_list[idx].사회복지사수) >= Number(social[0])) isShow=true;
                else isShow=false;
            }
            $(this).toggle(isShow);
        });
    }



function view(data_list){
    $("#section").empty(); //비워주기
    $.each(data_list,function(i,item){
        $("#section").append("<div class='item_short'><div class='item_image'>"+
        "<img src='https://loremflickr.com/200/200/health?random="+i+"'></div>"+
        "<div class='item_detail_box'><ul class='item_detail'>"+
        "<li>"+item.건강증진센터명+"</li><li>"+item.소재지도로명주소+"</li>"+
        "<li>"+item.건강증진업무내용+"</li><li>"+item.건강증진센터구분+"</li>"+
        "<li>"+item.운영기관명+"</li><li>"+item.운영기관전화번호+"</li></ul></div></div>"
        );
    });
}







//비동기 연습은 setTimeout으로 먼저 해보기
/*인천광역시 인공어초시설 현황 데이터 활용
어초 종류, 어초수량, 설치년도 별로 검색 가능 하게 만들기...................
checkbox로.................................................................
*/