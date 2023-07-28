let keep=new Array();

function bk_t(bank, money, account_num){
        this.bank=bank;
        this.money=money;
        this.acc=account_num;
    }

window.onload=function(){
    var bt=document.getElementById("bt");

    bt.addEventListener("click", input);

}
function input(){
    var bank=document.querySelector("#bank").value;
    var money=document.querySelector("#money").value;
    var acc=document.querySelector("#account_num").value;

    keep.push(new bk_t(bank, money, acc));

    show();
}


function show(){
    var rst=document.querySelector("#rst");
    var out="";
    for(var i=0; i<keep.length; i++){
        out += "은행: " + keep[i].bank + 
        ", 잔액: " + keep[i].money + 
        ", 계좌 번호: " + keep[i].acc + "<br>";
    }
    rst.innerHTML=out;
}