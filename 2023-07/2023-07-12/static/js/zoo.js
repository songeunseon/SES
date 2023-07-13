

window.onload=function(){
    var srhBt = document.getElementsByClassName("search_button");
    srhBt[0].addEventListener("click",function(){
        var bar=document.querySelectorAll(".search_bar")[0];
        bar.style.display="block";
    });
    var srh_close= document.getElementsByClassName("search_close");
    srh_close[0].addEventListener("click",function(){
        var bar=document.querySelectorAll(".search_bar")[0];
        bar.style.display="none";
    });
}
