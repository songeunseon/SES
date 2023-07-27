let keep=new Array();


window.onload=function(){
    var bt=document.getElementById("#bt");

bt.addEventListener("click", input);

   

}
function input(){
     var bank=document.querySelector("#bank").value
    var money=document.querySelector("#money").value
    var acc=document.querySelector("#account_num").value

    keep.push(new text(bank, money, acc));
}
function show(){
    var 
}


function text(bank, money, account_num){
        this.bank=bank;
        this.money=money;
        this.acc=account_num;
    }