const tall = [161,168,174,159];
const name = ["송은선","임민지","이상준","김선향"];
const weight = [44,55,66,77];

let avg = tall_avg();

$("#reg_bt").click(function(){
    if($("#tall").val()=="" || $("#name").val()==""){
        alert("키 또는 이름을 입력해");
        $("#tall").val()==""? $("#tall").focus():$("#name").focus();
        return;
    }
    tall.push(Number($("#tall").val()));
    name.push($("#name").val());
    weight.push($("#weight").val());
    avg=tall_avg();
    chart.destroy(); //삭제하는 기능
    draw();
});
const ctx = $("#bar_chart")[0].getContext("2d");
let chart = ''; //그려져있는 차트를 날리기위해 변수를 만들어서 집어넣음
draw();

function draw(){
chart = new Chart(ctx,{
    type:"bar",
    data:{
        labels:name,
        datasets:[{
            label:"201호 키 조사",
            data:tall,
            borderWidth:1,
            backgroundColor: avgColor(),
            indexAxis:"y"
            },
            {
                label:"201호 몸무게 조사",
                data:weight,
                borderWidth:1,
                backgroundColor: "green",
                indexAxis:"y"
            }
            // [
            //     tall[0]>avg? "#4374D9" : "#CC3D3D",
            //     tall[1]>avg? "#4374D9" : "#CC3D3D",
            //     tall[2]>avg? "#4374D9" : "#CC3D3D",
            //     tall[3]>avg? "#4374D9" : "#CC3D3D"
            // ],

        ]
    },
    // options:{
    //     scales:{
    //         y:{min:150, max:200, ticks:{stepSize:10}}
    //     }
    // }
})
}
function tall_avg(){
    var sum=0;
    $.each(tall,function(i,t){sum+=t;});
    return sum/tall.length;
}
function avgColor(){
    var a=[];
    $.each(tall,function(i,t){
        a.push(t>=avg ? "#4374D9" : "#CC3D3D")
    });
    return a;
}


// barPercentage:0.5, //막대의 너비 , 데이터개수에 비례할때 사용
// barThickness:50, //막대의 너비, 픽셀단위, 이녀석을 사용하면 barPercentage가 무시된다 ,고정적으로 사용할때
// borderSkipped:"start",//start, end, middle, bottom, left, top, right
// borderColor:"black",
// borderRadius:100,
// categoryPercentage:0.5,
// hoverBackgroundColor:"yellow", //hoverBorderColor,hoverBorderWidth,hoverBorderRadius
// indexAxis:"x",
// // base:avg