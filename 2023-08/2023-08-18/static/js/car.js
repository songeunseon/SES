let data=new Object;
const types=["하이브리드","수소","경유","휘발유","전기"];

async function getData(){
    var temp = await fetch("./static/js/연료별용도별자동차등록현황.json").then((res)=>res.json());
    console.log(temp);
    refine (temp);
}

$(async function(){
    await getData();
    const ctx = $("#car")[0];
var fuel = Object.keys(data);
var year = Object.keys(data[types[0]]);  //년도 빼오기
// var color = ["red","green","blue","yellow","orange"];
// var dataset=[];
// $.each(fuel,function(i,t){
//     dataset.push({
//         label:t,
//         data:data[t],
//         borderColor:color[i]

//     })
// })
    new Chart(ctx,{
        type:"line",
        data:{
            labels:year,
            datasets:// dataset
            [
                {   
                    label:fuel[0],
                    data:data[fuel[0]],
                    borderColor:"red",
                    yAxisID:"수소" //축을 분리
                },
                {
                    label:fuel[1],
                    data:data[fuel[1]],
                    borderColor:"green",
                    yAxisID:"전기"
                },
                {
                    label:fuel[2],
                    data:data[fuel[2]],
                    borderColor:"blue",
                    yAxisID:"하이브리드"
                },
                {
                    label:fuel[3],
                    data:data[fuel[3]],
                    borderColor:"yellow",
                    yAxisID:"휘발유"
                },
                {
                    label:fuel[4],
                    data:data[fuel[4]],
                    borderColor:"orange",
                    yAxisID:"경유"
                },

            ],
        },
        options:{
            scales:{
                "수소":{
                    min:500,
                    max:7000,
                    ticks:{color:"red"},
                    position:"right"
                },
                "전기":{
                    min:11000,
                    max:52000,
                    ticks:{color:"green"},
                    position:"right"
                },
                "하이브리드":{
                    min:140000,
                    max:320000,
                    ticks:{color:"blue"},
                    position:"right"
                },
                "휘발유":{
                    min:2700000,
                    max:3100000,
                    ticks:{color:"yellow"},
                    position:"left"
                },
                "경유":{
                    min:1450000,
                    max:1500000,
                    ticks:{color:"orange"},
                    position:"left"
                }
            }
        }
    })
});    

function refine(temp){
    $.each(temp,function(i,item){
    var type='';

    if((type=include(item.DTCONT))=='' || item.PURPOS_DIV==="사업용") return true;
    if(!(type in data)) //연료명으로 key가 있냐없냐
        data[type]=new Object(); //없으면 연료명으로 key생성
    if(!(item.REG_YY in data[type])) //년도로 키가 있냐없냐
        data[type][item.REG_YY]=Number(item.RIDNG_ODR); //없으면 년도 키 생성하고 키에 승용차수 저장
    else
        data[type][item.REG_YY]+=Number(item.RIDNG_ODR); //승용차수 누적

    })
    console.log(data);
}
function include(kind){
    for(var i in types){
        if(kind.indexOf(types[i])>-1)
        return types[i];
    }
    return '';
}


//item.RIDNG_ODR 승용차
//item.DTCONT 연료