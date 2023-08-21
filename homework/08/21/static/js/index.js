let data=new Object;

async function getData(){
    var temp = await fetch("./static/js/연료별용도별자동차등록현황.json").then((res)=>res.json());
    // console.log(temp);
    return temp;
}
$(async function(){
    data= await getData();

    $.each(data,function(i,item){

    })

})

