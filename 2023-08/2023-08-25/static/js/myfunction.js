function initBoard(){
    //페이지 구성요소 초기화
    $(".pan").each(function(i){
        var idx= Number($(this).data("idx"));
        $(this).css("background","url(./static/image/"+board_img[idx]);
        $(this).css("background-size","cover");
        $(this).append("<div class='location_name'>"+(board_img[idx].split(".")[0])+"</div>")
    });

var tmp=1;
    $(".top").each(function(){$(this).css("grid-area","top"+(tmp++));});
var tmp=1;
    $(".sideR").each(function(){$(this).css("grid-area","sideR"+(tmp++));});
var tmp=1;
    $(".bottom").each(function(){$(this).css("grid-area","bottom"+(tmp++));});
var tmp=1;
    $(".sideL").each(function(){$(this).css("grid-area","sideL"+(tmp++));});
var areas = '';
for(var i=1; i<=7; i++){
    areas += "'";
    for(var k=1; k<=9; k++){
        if(i==1)areas +="top"+k+" ";
        if(i==7)areas +="bottom"+(10-k)+" ";
        if(i>1 && i<7) areas +=(k==1)?"sideL"+(7-i)+" " : (k==9)? "sideR"+(i-1)+" ":" center ";
    }
    areas += "'";
}
    $("#board_container").css("grid-template-areas", areas);

}
const gcolor=["white","purple","red","yellow","blue"];
function draw(){
//보드 그리기
    var gidx=Object.values(gamer);
    $.each(gidx,function(i,p){
        $(".pan").eq(0).append("<svg width='100' height='100' viewBox='0 0 100 100'><circle cx='80' cy='80' r='10' fill='"+gcolor[0]+"'/></svg>")
        $(".pan").eq(1).append("<svg width='100' height='100' viewBox='0 0 100 100'><circle cx='80' cy='80' r='10' fill='"+gcolor[1]+"'/></svg>")
        $(".pan").eq(2).append("<svg width='100' height='100' viewBox='0 0 100 100'><circle cx='80' cy='80' r='10' fill='"+gcolor[2]+"'/></svg>")
        $(".pan").eq(3).append("<svg width='100' height='100' viewBox='0 0 100 100'><circle cx='80' cy='80' r='10' fill='"+gcolor[3]+"'/></svg>")
        $(".pan").eq(4).append("<svg width='100' height='100' viewBox='0 0 100 100'><circle cx='80' cy='80' r='10' fill='"+gcolor[4]+"'/></svg>")

    });
}
function setOpen(){
    var child = window.open("set_gamer.html",'참가자설정','width=300,height=300,top=400,left=750');
}
function dice_turn(){
    $(".dice").css('animation','turn 3s linear infinite');
}