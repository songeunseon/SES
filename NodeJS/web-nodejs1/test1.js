// console.log(100);
// nodejs실행방법
//생성할 서버 내용을 담은 파일 만들기(js파일)
//node파일명.js
//localhost:포트번호
//포트번호는 파일에 app.listen(포트번호)에 작성한 숫자를 사용한다.
//포트번호는 아무거나 하면 안된다.
//사용중이 아닌 포트번호를 해야한다.
//사용중이 아닌 포트번호를 찾으려면 컴퓨터 포트번호 조회하는 방법 찾아보기
//well-know port도 사용하면 안됨.
//그냥 3000써!!!!!!!!!!!!!!
//nodejs 서버 소스 파일에 내용이 변경되면 반드시 서버를 중단하고 다시 실행한다.
//중단은 vscode에서는 터미널을 클릭하고 ctrl+c 하면 된다.

var http = require('http');
var fs = require('fs'); //파일을 읽어오기위한 node.js에서의 객체
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url; //주소바꿔서
    var query = url.parse(_url,true).query;
    // console.log(query.part);
    var title = query.part;
    if(request.url=='/'){
        title='nodeJS 테스트';
        // _url='/index.html';
    }
    if(request.url=='/login'){
        _url='/login.html'; //여기에 들어가는것이 페이지에 보여진다 
    }
    if(request.url =='/favicon.ico'){
        return response.writeHead(404);
    }
    response.writeHead(200);
    fs.readFile(`./${query.part}`,'utf8',function(err,desct) { //내용 바꿔서 보여지게끔
        if(desct==undefined) desct=`          //desct 가 undefined라면 
        <ol>
        <li>테스트</li>
        <li>테스트2</li>
        <li>테스트3</li>
        </ol>`;

    var tmp = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            width: 1000px;
            margin: 20px auto;
        }
        a{
            font-size: 30px;
            background: skyblue;
            color: white;
            text-decoration: none;
            padding: 10px 20px;
        }
    </style>
    </head>
    <body>
    <a href="/">HOME</a>
    <a href="/login">로그인</a>
    <a href="?part=notice">공지사항</a>
    <a href="?part=freeBoard">자유게시판</a>
    <h1>${title}</h1>
    <p>${desct}</p>
    </body>
    </html>`;
    response.end(tmp);
    });
    
    // if(query.part !=undefined)
    //     response.end(fs.readFileSync(__dirname+"/"+query.part+".html"));
    // else
    //     response.end(fs.readFileSync(__dirname+_url));
});
app.listen(3000);