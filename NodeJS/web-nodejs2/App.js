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
var fs = require('fs');
var tempUrl = require('url');
var cookie = require('cookie');

const data = JSON.parse(fs.readFileSync('./data/member.json','utf8'));
// console.log(data);

    var app = http.createServer(function(request,response){
    var _url = request.url;
    var query = tempUrl.parse(_url,true).query;
        // console.log(Object.keys(query).length==0); //배열로 만들어 길이를 확인한다
    // console.log(query.part);
    
    if(Object.keys(query).length==0){
    if(request.url=='/'){
        _url='/src/index.html';
    }
    if(request.url=='/sign'){
        _url='/src/signup.html'; 
    }
    if(request.url=='/qs'){
        _url='/src/question.html';
    }
    if(request.url=='/login'){
        _url='/src/login.html';
    }
    response.writeHead(200);
    }else{  //쿼리스트링이 있는경우 동작하는 부분
        var page = query.part == undefined ? '' : query.part ;
        var sub = query.sub == undefined ? '' : query.sub ;
        // var isLogin = 'false';
        // var id='';
        var cookie_arr = [];
        if(sub === 'question'){
            cookie_arr=['sub=qs'];
            _url='/src/login.html';
        }
        if(page==='login_check'){
            cookie_arr = ['isLogin=false', 'id=""'];
            for(var i in data){
                if(data[i].sdmId===query.sdmId && data[i].sdmPw===query.sdmPw){
                    // isLogin='true';
                    // id=query.sdmId;
                    //아이디,비밀번호 일치하면 쿠키생성
                    cookie_arr = ['isLogin=true', 'id='+query.sdmId];
                    break;
                }
            }
            _url='/src/'+page+'.html';
        }
        if(page==='logout'){
            cookie_arr=['isLogin=false'];
            _url='/src/index.html';
        }
        
        response.writeHead(200,{
            'Set-Cookie':cookie_arr
        });
    }
    if(request.url =='/favicon.ico'){
        return response.writeHead(404);
    }

    //--------------저장되어있는 쿠키를 가지고 오는 방법-----------------
    // // console.log(request.headers.cookie); 
    // var cookies = {};
    // cookies= cookie.parse(request.headers.cookie); //내 컴퓨터에 있는 쿠키전체를 가져와 객체로 저장
    // // console.log(cookies.id);
    
    response.end(fs.readFileSync(__dirname+_url));
    // response.writeHead(200,{
    //     'Set-Cookie':['id=sky','pw=1234'] //쿠키만드는법
    // });
    // response.end('aa');
});
app.listen(3000);