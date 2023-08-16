const ctx=$("#acc")[0];
const name = ["김승겸","안태균","송은선","이상준","김선향","신상수"];
const exam = [3,2,5,1,6,4];
const question = [5,1,2,7,2,3];
const attitude = [6,5,6,4,3,2];

new Chart(ctx,{
    plugins:[ChartDataLabels],  //chart js에 대해서 찾아보기
    type:"bar",
    data:{
        labels:name,
        datasets:[
                {
                label:"시험",
                data:exam,
                backgroundColor:"#7476c0",
                datalabels:{align:"center", anchor:"center"}
                },
                {
                    label:"질문",
                    backgroundColor:"#74929e",
                    data:question,
                    datalabels:{align:"center", anchor:"center"}
                },
                {
                    label:"태도",
                    backgroundColor:"#5D391F",
                    data:attitude,
                    datalabels:{align:"center", anchor:"center"}
                }

        ],
    },
    options:{
        plugins:{
            datalabels:{ //값띄우기
                formatter:function(v,c){ //값표시
                    return v+"개";
                },
                color:"white"
            },
            title:{
                display:true,
                text:"커피누적"
            }
        },
        scales:{ //차트누적시키기
            x:{stacked:true},
            y:{stacked:true}
        }
    }
});