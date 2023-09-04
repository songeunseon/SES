<template>
    <main id="main">
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
        </section>
    </main>
</template>
<script>
    export default {
        name:'SdmLogin',
    }
</script>
<style>
#main{
    width: 700px;
    margin: 0 auto;
}
#content{
    width: 100%;
    margin: 50px;
}
#content h3{
    text-align: center;
    font-size: 30px;
    color: pink;
    padding-bottom: 10px;
    border-bottom: 3px solid pink;
}
.login_box{
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    position: relative;
    padding: 50px;
}
.login_input label{
    font-size: 20px;
    padding: 0 10px ;
    font-weight: 900;
}
.login_input input{
    width: 250px;
    height: 30px;
    text-align: center;
    font-size: 20px;
    outline: none;
    border: 0;
    border-bottom: 2px solid skyblue;
}
.login_bt{
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 20px;
    text-align: center;
    padding: 60px 40px;
}
.login_bt a{
    color: white;
    text-decoration: none;
    padding: 40px 10px;
    background: skyblue;
    cursor: pointer;
}
.login_bt a:hover{
    color: skyblue;
    background: white;
    border: 3px solid skyblue;
}
.joinAfind{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    font-size: 20px;
    padding-top: 50px;
    color: #aaa;
}

.join a{
    color: pink;
    font-weight: 900;
    text-decoration: none;
    padding: 10px 5px;
    cursor: pointer;
}
.join a:hover{
    border: 3px solid pink;
    border-left: 0;
    border-right: 0;
}
</style>