var a=0;
var b=0;
var c=0;
var d=0;
window.onload=function(){
    var sw=document.getElementsByClassName("sw_terminal");

    // setInterval(function(){
    //     sw[a].style.border="1px solid black";
    //     sw[a].style.background="black";
    //     sw[a].style.width="100px";
    //     a++;
    //     },1000);
    
    // setInterval(function(){
    //     sw[b].style.border="1px solid black";
    //     sw[b].style.background="red";
    //     sw[b].style.width="90px";
    // b++;    },2000);
    // setInterval(function(){
    //     sw[c].style.border="1px solid black";
    //     sw[c].style.background="yellow";
    //     sw[c].style.width="80px";
    // c++;    },3000);
    // setInterval(function(){
    //     sw[d].style.border="1px solid black";
    //     sw[d].style.background="green";
    //     sw[d].style.width="70px";
    // d++;    },4000);
    var trainA = setInterval(function() {
        if (a < sw.length) {
            // 체크 스타일 적용
            sw[a].style.border = "1px solid black";
            sw[a].style.background = "black";
            sw[a].style.width = "100px";
            a++;
            // 이전 역의 스타일 초기화
            if (a > 1) {
                sw[a - 2].style.border = "";
                sw[a - 2].style.background = "";
                sw[a - 2].style.width = "";
            }
        } else {
            clearInterval(trainA);
        }
    },300);
    var trainB = setInterval(function() {
        if (b < sw.length) {
            // 체크 스타일 적용
            sw[b].style.border = "1px solid black";
            sw[b].style.background = "red";
            sw[b].style.width = "100px";
            b++;
            // 이전 역의 스타일 초기화
            if (b > 1) {
                sw[b - 2].style.border = "";
                sw[b - 2].style.background = "";
                sw[b - 2].style.width = "";
            }
        } else {
            clearInterval(trainB);
        }
    },600);
    var trainC = setInterval(function() {
        if (c < sw.length) {
            // 체크 스타일 적용
            sw[c].style.border = "1px solid black";
            sw[c].style.background = "yellow";
            sw[c].style.width = "100px";
            c++;
            // 이전 역의 스타일 초기화
            if (c > 1) {
                sw[c - 2].style.border = "";
                sw[c - 2].style.background = "";
                sw[c - 2].style.width = "";
            }
        } else {
            clearInterval(trainC);
        }
    },900);
    var trainD = setInterval(function() {
        if (d < sw.length) {
            // 체크 스타일 적용
            sw[d].style.border = "1px solid black";
            sw[d].style.background = "green";
            sw[d].style.width = "100px";
            d++;
            // 이전 역의 스타일 초기화
            if (d > 1) {
                sw[d - 2].style.border = "";
                sw[d - 2].style.background = "";
                sw[d - 2].style.width = "";
            }
        } else {
            clearInterval(trainD);
        }
    },1200);
    }
