const http=require('http');
const fs = require('fs');
const url = require('url');
const template = require('./lib/template.js');

const app = http.createServer(function(request,response){
    const pageURL=request.url;
    const query = url.parse(pageURL,true).query; //쿼리스트링
    const path = url.parse(pageURL,true).pathname; //루트도메인 뒤 주소

    if(path === "/"){
        fs.readFile('./lib/page.json','utf8',function(err,data){
            const dataParse = JSON.parse(data);
            const html = template.homeHTML(dataParse.main, dataParse.login_before);

            response.writeHead(200);
            response.write(html);
            response.end();
        })
    }
    if(path === '/login'){
        fs.readFile('./lib/page.json','utf8',function(err,data){
            const dataParse = JSON.parse(data);
            const html = template.loginHTML(dataParse.main);

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