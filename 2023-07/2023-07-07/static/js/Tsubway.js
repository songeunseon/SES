let station=new Array(40).fill(0); //지금현재 이역에 몇번째 차량이있나 표시할 배열

const st_name=["상수역","은선역","예림역","향숙역","영주역","선양역","상준역","승겹역",
"승겸역","수호역","민지역","태균역","길원역","철환역","유온역","중앙역","서대전",
"대전역","판암역","용문역","시청역","청사역","현충원","탄방역","갈마역","용산역",
"오룡역","부산역","대구역","조치원","세종역","청주역","신탄역","중리역","반석역",
"월컵역","지족역","계림역","천안역","대동역"];

const train=[0,0,0,0]; //기차4대
const train_color=["","t-gold","t-purple","t-green","t-orangered"];


//관리하기 편하게 하기위해서 한번만 실행되도 함수로 빼는것
window.onload=function(){
    map_draw(); //지하철 지도 그리기
    train_active(); //지하철 차량 움직이기
    var cls=document.querySelector("#modal_bg");
    cls.addEventListener("click",function(){
        var modal=document.querySelector("#modal");
        modal.style.display="none";
    });
}
function info(idx){
    var modal=document.querySelector("#modal");
    modal.style.display="block";
    var bg=document.querySelector("#bg");
    //현재 정거장에 가장 가까이 있는 차량 찾기
    var train_num=find_train(idx);

    bg.innerHTML="<div class='info'>"+
    "<div><b> 역 명: "+ st_name[idx]+"</b> </div>"+
    "<div><b> 진입차량: "+train_num+ "번차량</b></div>"+
    "</div>";
}
function find_train(idx){
    if(train[0]<0){//역방향 오는 경우
        for(var i=idx+1; i<station.length; i++){
            if(station[i]!=0)
            return station[i];
        }
    }else{//정방향 오는경우
        for(var i=idx-1; i>=0; i--){
            if(station[i]!=0)
                return station[i];
        }
    }
}
function train_active(){
    station[0]=1;
    map_draw();
    
    setInterval(function(){
        map_draw();
    },3000);

    setInterval(
        function(){
            station[Math.abs(train[0]++)]=0;
            station[Math.abs(train[0])]=1;
            if(train[0]==39){ //마지막역 도착
                station[Math.abs(train[0])]=0;
                setTimeout(function(){
                    train[0]=-40;
                },4000);
            }
        }
    ,4000);
    setTimeout(train2,8000);
    setTimeout(train3,16000);
    setTimeout(train4,24000);
}
function train2(){
    station[0]=2;
    setInterval(
        function(){
            station[Math.abs(train[1]++)]=0;
            station[Math.abs(train[1])]=2;
            if(train[1]==39){ //마지막역 도착
                station[Math.abs(train[1])]=0;
                setTimeout(function(){
                    train[1]=-40;
                },4000);
            }
        }
    ,4000);
}
function train3(){
    station[0]=3;
    setInterval(
        function(){
            station[Math.abs(train[2]++)]=0;
            station[Math.abs(train[2])]=3;
            if(train[2]==39){ //마지막역 도착
                station[Math.abs(train[2])]=0;
                setTimeout(function(){
                    train[2]=-40;
                },4000);
            }
        }
    ,4000);
}
function train4(){
    station[0]=4;
    setInterval(
        function(){
            station[Math.abs(train[3]++)]=0;
            station[Math.abs(train[3])]=4;
            if(train[3]==39){ //마지막역 도착
                station[Math.abs(train[3])]=0;
                setTimeout(function(){
                    train[3]=-40;
                },4000);
            }
        }
    ,4000);
}
function map_draw(){ //지도 그리기 위한 함수
    var map=document.querySelector("#map");//$("#map")
    var out="";
    for(var line=0; line<4; line++){
        var t=line*10;
        if(line%2!=0){t+=9; //인덱스만 바꿔서 표현
        while( t>= line*10 ) //1줄 마지막 인덱스 9, 2줄마지막인덱스 10, 3줄 마지막인덱스 29, 4줄 마지막인덱스 30
            out += make(t--);
    }else{
        while( t<= line*10+9 )
            out += make(t++);
        }
    }
    map.innerHTML=out;
}
function make(t){
    var w95="";
    if((t%10==9 || t%10==0) &&t!=0 &&t!=39)//줄의 마지막 역과 시작역 부분
        w95="w95";
    if(t==9 || t==29 || t==19)//줄의 마지막역
        w95 += " w95-top";
    if(t==10 || t==30 || t==20)//줄의 시작역
        w95 +=" w95-bottom";
    if(t==19 || t==20 )//오른쪽에 있는 연결 되어야하는 역
        w95 +="-right";
    var out="";
    out += "<div class='station'>";
    out += "<div class='train "+(train_color[station[t]])+"'>  <i class='fa-solid fa-train'>  </i></div>";
    out += "<div class='mark' onclick='info("+t+")'><div class='rail "+w95+"'></div>"+
            "<span class='stop'><i class='fa-regular fa-square-minus "+(train_color[station[t]])+"'></i></span>";
    out += "</div>";
    if(t%10==9 && t!=39)
        out+="<div class='rad "+(t==19?'right':'left')+"'></div>";
    out += "<div class='name'>"+st_name[t]+"</div></div>";
    return out;
}