module.exports = {
    questionHTML:function(main,login,qsData){
        var tag ='';
        for(var q of qsData){
            tag +=
                "<tr class='qstr'>"+
                "<td class='qsNum a'>"+q.id+"</td>"+
                "<td class='qsTit b'>"+q.title+"</td>"+
                "<td class='qsWri c'>"+q.writer+"</td>"+
                "<td class='qsDate d'>"+q.date+"</td>"+
                "<td class='qsAns e'>"+(q.to==0? '미답변' : '답변완료')+"</td>"+
                "</tr>";
        }

        var qsHTML=`
        <section id="content">
                <div id="qsList">
                    <div class="qsTitle">
                        <h2>문의</h2>
                        <a href="javascript:questionWrite();">문의하기</a>
                    </div>
                    <div class="search_wrap">
                        <input type="text" name="word" id="word" placeholder="검색어를 입력하세요">
                    </div>
                    <div class="qsList_box">
                        <table>
                            <thead>
                                <th class="a">번호</th>
                                <th class="b">제목</th>
                                <th class="c">작성자</th>
                                <th class="d">작성일</th>
                                <th class="e">답변</th>
                            </thead>
                            <tbody id="qs">${tag}</tbody>
                        </table>
                    </div>
                </div>
            </section>
            <section id="side">
                <div class="login_bt">
                    <a href="/${login.url}">${login.text}</a>
                </div>
            </section>
        `;
        return (commonHTML(main,qsHTML,"question"));
    },
    homeHTML:function(main,login){
        var mainHTML=`
        <section id="content">
            <img src="./image/${main.main_img}">
        </section>
        <section id="side">
            <div class="login_bt">
                <a href="/${login.url}">${login.text}</a>
            </div>
        </section>`;
        return (commonHTML(main,mainHTML,"index"));
    },
    loginHTML:function(main){
        var loginHTML=`
        <section id="content">
                <h3>SDM garden 로그인</h3>
                <div class="login_wrap">
                    <form name="loginf" id="loginf" method="get" action="/">
                        <input type="hidden" name="part" value="login_check">
                        <div class="login_box">
                            <div class="login_input">
                                <input type="text" name="sdmId" id="sdmId" placeholder="abc123@naver.com">
                                <label>ID</label>
                            </div>
                            <div class="login_input">
                                <input type="password" name="sdmPw" id="sdmPw">
                                <label>PW</label>
                            </div>
                            <div class="login_bt">
                                <a href="javascript:login();">LOGIN</a>
                            </div>
                        </div>
                    </form>
                    <div class="joinAfind">
                        <p class="find">아이디 / 비밀번호 찾기</p>
                        <p class="join"><a href="/sign">회원가입</a></p>
                    </div>
                </div>
                </section>`
                return (commonHTML(main,loginHTML,"login"));
            },
    signupHTML:function(main){
        var signHTML=`
        <section id="content">
        <h3>SDM garden 회원가입</h3>
        <div id="jId"><label>아이디</label><input type="email" name="sdmId" id="sdmId" placeholder="ex-abc123@naver.com"></div>
        <div id="jPw"><label>비밀번호</label><input type="password" name="sdmPw" id="sdmPw" placeholder="특수기호포함 8~16자리"></div>
        <div id="jTel"><label>연락처</label><input type="tel" name="tel" id="tel" placeholder="'-'하이픈 제외"></div>
        <div id="jAddr"><label>신혼집주소</label><input type="text" name="addr" id="addr" placeholder="신주소로 입력"></div>
        <div id="jDate"><label>결혼예정일</label><input type="date" name="wDate" id="wDate"></div>
        </section>
        <div id="join">
            <button id="jbt">♡ 작 성 완 료 ♡</button>
        </div>`
                return (commonHTML(main,signHTML,"sign"));
            }
}
function commonHTML(main,html,css){
        var menu = "";
        for(var key of Object.keys(main.menu)){
            menu+=`<li class="menu"><a href="/${key}">${main.menu[key]}</a></li>`;
        }
        return (`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>스드메의모든것</title>
    
    <link rel="stylesheet" href="./lib/main.css">
    <link rel="stylesheet" href="./lib/${css}.css">

</head>
<body>
    <div id="wrap">
        <header id="header">
            <div class="logo"><a href="/"><img src="./image/${main.logo}"></a> </div>
            <nav class="nav">
                <ul class="menuList">
                    ${menu}
                </ul>
            </nav>
        </header>
        <main id="main">
            ${html}
        </main>
    </div>
</body>
</html>
        `);
        
    }