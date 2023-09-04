<template>
<main id="main">
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
                            <tbody id="qs">
                                <tr v-for="q in qdata" :key="q.id">
                                    <td class="a">{{q.id}}</td>
                                    <td class="b">{{q.title}}</td>
                                    <td class="c">{{q.writer}}</td>
                                    <td class="d">{{q.date}}</td>
                                    <td class="e">{{q.to==0? '미답변' : '답변완료'}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <section id="side">
                <div class="login_bt"><a href="/login">로그인</a></div>
            </section>
        </main>
        
</template>
<script>
    import data from '@/assets/question.json';
    const qdata=data;

    export default{
        data(){
            return{qdata,};
        },
        name:'SdmQs',
    }
</script>
<style>
#side .login_bt{
    padding: 0 10px;
}
#side .login_bt a{
    color: white;
    text-decoration: none;
    background: pink;
    padding: 171px 0;
    width: 100%;
    display: inline-block;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
}
#side .login_bt a:hover{
    background: white;
    color: pink;
    border: 3px solid pink;
}
#main{
    width: 100%;
    margin: 0 auto;
}
#content
#qsList
.qsTitle{
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 3px solid skyblue;
    position: relative;
}
.qsTitle a{
    position: absolute;
    border: 0;
    background: skyblue;
    color: #fff;
    padding: 10px 20px;
    font-size: 20px;
    right: 0px;
    top: 0;
    text-decoration: none;
}
.qsTitle a:hover{
    background: #fff;
    color:skyblue;
}
.qsTitle h2{
    width: 100%;
    font-size: 30px;
    color: skyblue;
    text-align: center;


}
.search_wrap{
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
}
#word{
    width: 50%;
    border: 0;
    border-bottom: 1px dashed skyblue;
    font-size: 20px;
    text-align: center;
    color: #aaa;
    outline: none;
    padding: 10px;
}
.qsList_box{
    width: 100%;
}
.qsList_box table{
    width: 100%;
}
.a, .b, .c, .d, .e{
    padding: 10px 10px;
    font-size: 15px;
}
.qstr{
    width: 100%;
}
.a{width: 60px; text-align: center;}
.b{width: 400px; text-align: center;}
.c{width: 120px; text-align: center;}
.d{width: 120px; text-align: center;}
.e{width: 120px; text-align: center;}

.qsList_box table thead th{
    padding: 10px;
    font-size: 15px;
    background: skyblue;
    color: #fff;
}
.qsList_box table thead th:nth-child(even){
    background: pink;
}
#qs{
    width: 100%;
}
#qs tr td{
    border-bottom:1px solid navajowhite;
}
.user{
    width: 100%;
    text-align: center;
    position: relative;
}
.user a{
    color: white;
    text-decoration: none;
    background: pink;
    padding: 10px 20px;
    width: 190px ;
    display: inline-block;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
    border: 0;
    text-decoration: none;
    position: absolute;
    top: 0;
    right: 0;
    height: 47px;
}
.user p{
    position: absolute;
    top: 50px;
    width: 100%;
    font-size: 20px;
    padding: 10px 20px;
    margin: 0 10px;
}
.user a:hover{
    background: white;
    color: pink;
    border: 3px solid pink;
    height: 47px;
}

#qsModal{
    position: fixed;
    width: 100%;
    height: 100vh;
    top:0;
    left: 0;
}
#qsModal .modalBackground{
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
}
#qsModal .qsInputBox{
    position: absolute;
    background: navajowhite;
    width: 600px;
    padding: 50px 80px;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}
.qsInput{
    display: flex;
    align-items: center;
}
.qsInput label{
    width: 20%;
    font-size: 17px;
    opacity: 0.4;
}
#title{
    height: 30px;
    font-size: 17px;
    padding: 3px 15px;
    width: 80%;
    border: 0;
    border-radius: 5px;
    order: 2;
}
#title:focus + label{
    opacity: 1;
    font-weight: 800;
}
#qsContent{
    order: 2;
    resize: none;
    width: 80%;
    height: 300px;
    border: 0;
    padding: 3px 10px;
    font-size: 17px;
}
#qsContent:focus + label{
    opacity: 1;
    font-weight: 800;
}
.qsRegBt{text-align: center;}
.qsRegBt a{
    display: inline-block;
    padding: 10px 30px;
    text-decoration: none;
    color: #aaa;
    font-weight: 900;
    border: 0;
}
.qsRegBt a:hover{
    color: #fff;
}
</style>