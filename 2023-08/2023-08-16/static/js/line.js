const love = [100,95,89,96,75,64,93];
const day = [10,20,50,100,200,300,365];
const ctx = $("#line1")[0];

let 겸지={
    
        label:"사랑지수",
        data:love,
        borderColor:"pink",
        tension:0.2,
        fill:false,
        // backgroundColor:"skyblue",
        borderCapStyle:"square", //butt(기본값)
        pointStyle:"circle", //circle, cross, dash, line, rect, star, triangle, rectRounded
        pointBorderWidth:10,
        pointHoverBorderColor:"hotpink",
        pointHoverBorderWidth:10,
        // showLine:false
    
}
let 수향 = {
    data:[100,100,90,80,70,30,20],
    borderColor:"red",
    pointBorderWidth:10,
}

const loveData={
    labels:day,
    datasets:[
        겸지,수향
]
}
const chartOption={
    Plugins:{
        title:{display:true, text:"기념일에 따른 사랑지수"}
    },
    scales:{
        y:{stacked:true}
    }
}
new Chart(ctx,{
    type:"line",
    data:loveData,
    options:chartOption
});

/*
오늘의 숙제
혼합 차트 만들기(막대, 꺽은선)
const day = ["5월","6월","7월","8월","9월"];
const clove = [34,56,86,43,12];->막대
const plove = [11,24,95,35,23];->막대
const nlove = [8,43,100,100,100];->막대
const hlove = [0,5,70,89,94,14];  -> 꺽은선
*/
