const board_img=["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png",
"10.png","11.png","12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png",
"20.png","21.png","22.png","23.png","24.png","25.png","26.png","27.png","28.png"];

const board=[];
var gamer=[];

$(function(){
    for(var i=0; i<28; i++){
        board.push(0);
    }
    initBoard();
    draw();
    $("#setBt").click(setOpen);
    $("#dice_bt").click(dice_turn);
    
    t=setInterval(()=>{
        if(gamer.length>0){
            //console.log(gamer);
            $("#dice_bt").attr('disabled',false);
            draw(); 
            clearInterval(t);
        }
    },50);
});
