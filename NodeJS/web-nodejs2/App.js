/*
page 구성 - 메인 , 회원가입 , 문의
    메인 - index.html
    회원가입 - signup.html
    문의 - question.html
    각 페이지의 내용은 간단하게만 작성 (메인, 회원가입, 문의 페이지인지 구별되게만)
    url : 메인 - htttp://localhost:3000
    회원가입 - http://localhost:3000/sign
    문의 - http://localhost:3000/qs

*/

var http = require('http');
var fs = require('fs'); //파일을 읽어오기위한 node.js에서의 객체
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url; //주소바꿔서 보여지게끔
    var query = url.parse(_url,true).query;
    // console.log(query.part);
    var title = query.part;
    if(request.url=='/'){
        title='HOMEPAGE';
        _url='/index.html';
    }
    if(request.url=='/sign'){
        _url='/signup.html'; //여기에 들어가는것이 페이지에 보여진다 
    }
    if(request.url=='/qs'){
        _url='/question.html'; //여기에 들어가는것이 페이지에 보여진다 
    }
    if(request.url =='/favicon.ico'){
        return response.writeHead(404);
    }
    response.writeHead(200);
    fs.readFile(`./${query.part}`,'utf8',function(err,desct) { //내용 바꿔서 보여지게끔 //desct 가 undefined라면 
        if(desct==undefined) desct=`          
        <div>
        <div>안녕하세요</div>
        <div>메인입니다</div>
        </div>`;

    var tmp = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <a href="?part=sign">회원가입</a>
        <a href="?part=qs">Q&A</a>
        
        <h1>${title}</h1>
        <p>${desct}</p>
    </body>
    </html>`;
    response.end(tmp);
    });
});
app.listen(3000);