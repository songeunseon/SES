let data=[];
let hs=[];

async function getData(){
    var temp= await fetch("./static/js/sigu.json").then((res)=>res.json());
    return temp;
    //console.log(temp);
}
async function sigu(brtcCode, signguCode){
    var ServiceKey="j6fUdSWZZSZdJsHMa5%2FYpFE3f1uV6u0%2BwJA%2BDHpL5PvrUjKgL48S7DA%2BlR6jK6%2F0GhIN9SNExqmWq3EKjKWVTg%3D%3D";
    var url="http://krdrive.ipdisk.co.kr:8000/test/aaa.php?ServiceKey="+ServiceKey+
    "&brtcCode="+brtcCode+"&signguCode="+signguCode+"&numOfRows=500";
    var temp = await fetch(url).then((res)=>res.json());
    //console.log(temp.hsmpList);
    return temp.hsmpList;
}
$(async function(){
    data= await getData();

    $.each(data,function(i,item){
        if(item.시군구코드=="" || item.광역시도코드=="36" ){
            $("#si").append("<option value='"+item.광역시도코드+"'>"+item.법정동명+"</option>")
        }else if(item.광역시도코드=="11"){
            $("#gu").append("<option value='"+item.시군구코드+"'>"+item.법정동명+"</option>")
        };
    });
    
    $("#si").on("change",function(){
        $("#gu").empty();
        var code= Number($(this).val());
        $.each(data,function(i,k){
            if(k.광역시도코드==code && k.시군구코드!=''  ){
                $("#gu").append("<option value='"+k.시군구코드+"'>"+k.법정동명+"</option>")
            }
        });
    });

    $("#gu").on("change", async function(){
        
        var si = $("#si").val();
        var gu = $(this).val();
        
        hs = await sigu( si, gu);
        console.log(hs);
    })
});
// 