const day = ["5월","6월","7월","8월","9월"];
const klove = [34,56,86,43,12];
const plove = [11,24,95,35,23];
const slove = [8,43,100,100,100];
const hlove = [0,5,70,89,94,14];


const ctx = $("#love")[0];

const klove_data = {
    type:'bar',
    label:"klove",
    data:klove,
    backgroundColor:'black',
}

const plove_data = {
    type:'bar',
    label:"plove",
    data:plove,
    backgroundColor:'grey',
}

const slove_data = {
    type:'bar',
    label:'slove',
    data:slove,
    backgroundColor:'red',
}

const hlove_data = {
    type:'line',
    label:"hlove",
    data:hlove,
    backgroundColor:'tomato',
    pointBorderWidth:15,
    borderColor:"darkgreen",
}

const totalData = {
    labels:day,
    datasets:[hlove_data, klove_data, plove_data, slove_data]
}

new Chart(ctx,{
    data:totalData,
    options:{
        plugins:{
            title:{
                display:true,
                text:"도대체 몇각 관계인가요?"
            }
        },
        scales:{
        y:{min:0, max:110, ticks:{stepSize:5}}
        }
    }
})