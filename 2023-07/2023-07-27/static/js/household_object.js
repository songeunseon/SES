const category=["편의점","카페","음식점","영화관","문화생활","여행","교통","마트",
"관리비","세금","온라인쇼핑","경조사","기부","교육","의료","유흥","미용","통신","급여",
"기타수입","로또"];

const card=[{ name:"하나카드", bank:"hana"},
{ name:"신한카드", bank:"shinhan"},
{ name:"국민카드", bank:"kb"},
{ name:"삼성카드", bank:"samsung"}];
const bank=[{name:"하나은행", bank:"hana",money:"123000"},
{name:"신한은행", bank:"shinhan",money:"456000"},
{name:"국민은행", bank:"kb",money:"789000"},
{name:"삼성은행", bank:"samsung",money:"147000"}];

function house(date, money, category, detail, way, getcome, balance ){
    this.date=date; //날짜
    this.money=money; //금액
    this.category=category; //분류
    this.detail=detail //내역
    this.way=way; //방식-현금, 계좌(어디은행?), 카드(어디카드?)
    this.getcome=getcome; // 수입, 지출
    this.balance=balance; // 잔액
}
house.prototype.won=function(){
    return "￦"+this.money.toLocaleString(); //돈을 천단위로 콤마를 찍어주고 앞에 돈표시
}
house.prototype.getWay=function(){ //수입이든 지출이든 현금은 그냥 현금이고 계좌와 카드는 어디인지
    return this.way.split("-").length>1 ? this.way.split("-")[1]: this.way;
}