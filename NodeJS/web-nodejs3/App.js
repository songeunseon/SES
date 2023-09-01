const http=require('http');
const fs = require('fs');
const url = require('url');
const template = require('./lib/template.js');
const JStemp = require('./lib/JStemplate.js');
const member = JSON.parse(fs.readFileSync('./lib/member.json','utf8'));
let cookie_arr=[];

const app = http.createServer(function(request,response){
    const pageURL=request.url;
    const query = url.parse(pageURL,true).query; //쿼리스트링
    const path = url.parse(pageURL,true).pathname; //루트도메인 뒤 주소

    if(path === "/"){
        fs.readFile('./lib/page.json','utf8',function(err,data){
            const dataParse = JSON.parse(data);
            var html='';
        if(query.sdmId == undefined)
            html = template.homeHTML(dataParse.main, dataParse.login_before);
        else{ //파라미터에 id가 있다면
            for(var m of member){
                if(m.sdmId==query.sdmId && m.sdmPw==query.sdmPw){
                    cookie_arr=['isLogin=true','id='+query.sdmId];
                    dataParse.login_after.id=query.sdmId;
                    break;
                }
            }
            html = template.homeHTML(dataParse.main,dataParse.login_after);
        }

            response.writeHead(200, 
                {'Set-Cookie': cookie_arr});
            response.write(html);
            response.end();
        })
    }
    if(path === '/login'){
        fs.readFile('./lib/page.json','utf8',function(err,data){
            const dataParse = JSON.parse(data);
            var html = template.loginHTML(dataParse.main);
            html += JStemp.login();

            response.writeHead(200);
            response.write(html);
            response.end();
        })
    }
    if(path === '/sign'){
        fs.readFile('./lib/page.json','utf8',function(err,data){
            const dataParse = JSON.parse(data);
            const html = template.signupHTML(dataParse.main);

            response.writeHead(200);
            response.write(html);
            response.end();
        })
    }
    if(path === '/qs'){
        fs.readFile('./lib/page.json','utf8',function(err,data){
            const dataParse = JSON.parse(data);
            var qdata = JSON.parse(fs.readFileSync('./lib/question.json','utf8'));
            const html = template.questionHTML(dataParse.main,dataParse.login_before,qdata);

            response.writeHead(200);
            response.write(html);
            response.end();
        })
    }
    if(path.indexOf('.css')>-1){
        var css_name = path.slice('/lib/'.length);
        fs.readFile('./lib/'+css_name,function(err,data){
            response.writeHead(200);
            response.write(data);
            response.end();
        })
    }
    if(path.indexOf('/image') > -1){
        var img_name = path.slice('/image/'.length);
        fs.readFile('./image/'+img_name,function(err,data){
            response.writeHead(200);
            response.write(data);
            response.end();
        });
    }
});
app.listen(3000);



/*

*/