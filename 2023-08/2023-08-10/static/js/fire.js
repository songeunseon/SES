let data=[];
let fire_stat=new Object();
let color=["#003300","#330066","#336666","#CC3300","#996666","#663366","#666633","#999999","#006699","#000000"];



async function getData(){
    var temp = await fetch("./static/traffic.json").then((r)=>r.json());
    return temp.body.items;
}
$(async function(){
    data = await getData();
    var total=bike=0;

    $.each(data,function(i,item){
        total+=Number(item.gutCo); //전체 사고건수
        bike+=item.rlifAcdAsmCdNm==="오토바이사고"?Number(item.gutCo):0;
        if(item.rsacGutFsttOgidNm in fire_stat) //fire_stat객체에 rsacGutFsttOgidNm의 이름의 키가 있냐없냐
        {
            fire_stat[item.rsacGutFsttOgidNm].출동건수 += item.gutCo;
            fire_stat[item.rsacGutFsttOgidNm].환자수 += item.trnfPcnt;
        }else{
            fire_stat[item.rsacGutFsttOgidNm] = { 출동건수 :Number(item.gutCo), 환자수:Number(item.trnfPcnt), 환자유형:(item.rlifAcdAsmCdNm)};
        }
    });

    
    var ctx=$("#graph")[0].getContext("2d");

    ctx.strokeRect(1200,50,200,60);
    ctx.moveTo(1230,70);
    ctx.lineTo(1290,70);
    ctx.stroke();
    ctx.fillStyle="#000";
    ctx.fillRect(1230,85,60,15);
    ctx.fillText("환자수",1300,73);
    ctx.fillText("출동건수",1300,95);
    var keys=Object.keys(fire_stat);
    var oldx=oldy=0;
    var oldtext=0;
    $.each(keys,function(i,item){
        ctx.fillStyle="#000";
        ctx.font="15px Arial";
        ctx.fillText(item,50+100*i,780);
        ctx.fillStyle
        
        ctx.fillStyle=color[i];
        ctx.fillRect(50+100*i,760-fire_stat[item].출동건수,50,fire_stat[item].출동건수);
        
        if(oldx==0 && oldy==0){
            oldx=80+100*i;
            oldy=760-fire_stat[item].환자수;
        }else{
            ctx.moveTo(oldx,oldy);
            ctx.lineTo(80+100*i,760-fire_stat[item].환자수);
            ctx.stroke();

            oldx=80+100*i;
            oldy=760-fire_stat[item].환자수;
        }
    });

    var ctx2=$("#pi")[0].getContext("2d");
    var pc=1/(total/bike);
    var bike_deg=270+360*pc;
    bike_deg=Math.round((bike_deg>360? bike_deg-360: bike_deg)*100)/100;

    ctx2.beginPath();
    ctx2.moveTo(350,350);
    ctx2.arc(350,350,300,270*Math.PI/180,bike_deg*Math.PI/180,false);
    ctx2.fillStyle="green";
    ctx2.fill();
    
    ctx2.beginPath();
    ctx2.moveTo(350,350);
    ctx2.arc(350,350,300,bike_deg*Math.PI/180,270*Math.PI/180,false);
    ctx2.fillStyle="red";
    ctx2.fill();

    ctx2.fillStyle="#000";
    ctx2.font="30px Arial";
    ctx2.fillText(Math.round(pc*1000)/10+"%",450,200);
});
