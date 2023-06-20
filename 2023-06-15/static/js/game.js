function start(){
    document.getElementById("print").innerHTML="";
    game=setInterval(change_img,200);
}
let change=1;

function change_img(){
    var sc="scissors.png";
    var ro="rock.png";
    var pa="paper.png";
    var imgtg=document.getElementById("hand");
    if(change==1){
        imgtg.src="./static/image/"+sc;
        change=2;
    }else if(change==2){
        imgtg.src="./static/image/"+ro;
        change=3;
    }else{
        imgtg.src="./static/image/"+pa;
        change=1;
    }
}
function rst(choice){
    clearInterval(game);
    var sc="scissors.png";
    var ro="rock.png";
    var pa="paper.png";
    var imgtg=document.getElementById("hand");
    
    if(change==1){
        imgtg.src="./static/image/"+sc;
    }else if(change==2){
        imgtg.src="./static/image/"+ro;
    }else{
        imgtg.src="./static/image/"+pa;
    }


    
    if(choice==change){
        document.getElementById("print").innerHTML="비겼어 "+choice+"/"+change;
    }else if((choice==(1)&&change==2) || (choice==(2)&&change==3) || (choice==(3)&&change==1) ){
        document.getElementById("print").innerHTML="졌어"+choice+"/"+change;
    }else{
        document.getElementById("print").innerHTML="이겼어"+choice+"/"+change;
    }
}

