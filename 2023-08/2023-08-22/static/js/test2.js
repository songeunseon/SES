let house=new Object();




$(function(){

    $("#icon").click(function(){
        $(this).toggleClass("open");
        $("#side").toggleClass("sideopen");
    });

    $.getJSON("./data/test2.json", function(data){
        house=data;
        console.log(data)
        // var 수입 = data.수입;
        // var 지출 = data.지출;

        $.each(data.수입,function(i,item){
            var 금액 = Number(item.금액).toLocaleString();
            // console.log();
            $("#in").append("<table class='mnt'><tr class='ttr'>"+
                "<td class='cate'>"+item.분류+"</td>"+
                "<td class='mon'>"+금액+"원</td>"+
                "<td class='con'>→ "+item.내용+"</td>"+
                "</tr></table>"
                )
        });
        $.each(data.지출,function(i,item){
            var 금액 = Number(item.금액).toLocaleString();
            // console.log();
            $("#out").append(
                "<table class='mnt'><tr class='ttr'>"+
                "<td class='cate'>"+item.분류+"</td>"+
                "<td class='mon'>"+금액+"원</td>"+
                "<td class='con'>→ "+item.내용+"</td>"+
                "</tr></table>"
                )
        });

        
    });
    $("#word").on("keyup",word_search);
    $("#money").on("keyup",money_search);
    $("input[name=category]").click(cate_search);
})
function cate_search(){
    var ctg = [];
    $("input[name=category]:checked").each(function(){
        ctg.push($(this).val());
        console.log(ctg)
    });
    $(".mnt").filter(function(){
        var isShow = true;
        var text = $(this).find(".cate").text();
        if(ctg.indexOf(text)== -1 && ctg.length != 0) isShow=false;
        $(this).toggle(isShow);
    });
}
function word_search(){
    var word = $(this).val();
    $(".mnt").filter(function(){
        $(this).toggle($(this).text().indexOf(word)>-1);
    });
}
function money_search(){
    var money = $(this).val();
    if(money != ''){
    $(".mnt").filter(function(){
        var isShow = true;
        var m = $(this).find(".mon").text().replace("원","").replace(/,/g,"");
        if(Number(money)<Number(m)) isShow = false;
        $(this).toggle(isShow);
        });
    }
}
function showList(){
    $("#main").show();
    $("#mychart").hide();
}
let house_chart='';
function showChart(){
    $("#main").hide();
    $("#mychart").show();
    if(house_chart == ''){
        var ctx = $("#mycanvas")[0];
        var ctx2 = $("#incomeChart")[0];

// 분류와 분류별 금액 총액 구하기
var set = new Set(); //지출분류
var total = new Array(); //지출 분류 별 총 금액
var sete = new Set(); //수입분류
var totale = new Array(); //수입 분류 별 총 금액
        $.each(house.지출,function(idx,data){
            var 분류 = data.분류;
            var 금액 = Number(data.금액);
            if(set.has(분류)){
                total[분류] += 금액;
            }else{
                total[분류]=금액;
            }
            set.add(분류);
        });
        $.each(house.수입,function(idx,data){
            var 분류 = data.분류;
            var 금액 = Number(data.금액);
            if(set.has(분류)){
                totale[분류] += 금액;
            }else{
                totale[분류]=금액;
            }
            sete.add(분류);
        });
        house_chart = new Chart(ctx,{
            plugins:[ChartDataLabels],
            type:"pie",
            data:{
                labels:Array.from(set),
                datasets:[
                    {
                        data:Object.values(total),
                        backgroundColor:["#ff0000","#a40000","#da706f","#e69696","hotpink","#e15e7a","#fc9d37"],
                    }
                ]
            },
            options:{
                plugins:{
                    datalabels:{
                        formatter:function(value,context){
                            var total = context.chart.getDatasetMeta(0).total;
                            console.log(value);
                            return Math.round(value/total*100)+"%";
                        },
                        color:"black",
                        align:"start",
                        anchor:"end",
                        font:{
                            size:"20px",
                        }
                    }
                }
            }
        });
        house_chart = new Chart(ctx2,{
            plugins:[ChartDataLabels],
            type:"pie",
            data:{
                labels:Array.from(sete),
                datasets:[
                    {
                        data:Object.values(totale),
                        backgroundColor:["#529b79","#4890bb","#88c8ff","#7ad3c1","#a0d396","#8a94ff"],
                    }
                ]
            },
            options:{
                plugins:{
                    datalabels:{
                        formatter:function(value,context){
                            var total = context.chart.getDatasetMeta(0).total;
                            return Math.round(value/total*100)+"%";
                        },
                        color:"red",
                        align:"start",
                        anchor:"end",
                        font:{
                            size:"20px",
                        },
                    }
                }
            }
        });
    }
}


