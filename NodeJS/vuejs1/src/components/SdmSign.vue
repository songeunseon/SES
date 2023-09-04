<template>
    <main id="main">
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
        </div>
    </main>
</template>
<script>
    export default {
        name:'SdmSign',
    }
</script>
<style>
#main{
    width: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}
#content h3{
    border-bottom: 3px solid pink;
    padding-bottom: 20px;
    font-size: 30px;
    text-align: center;
}
#content{
    width: 700px;
    padding: 20px;
    color: pink;
    background: white;
    border: 3px dashed pink;
}
#content div{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 100px;

}
#content div input{
    width: 300px;
    margin: 20px;
    outline: none;
    border: 0;
    border-bottom: 3px double pink;
    text-align: center;
    font-size: 15px;
}
#sdmId, #sdmPw, #tel, #addr, #wDate{
    color: #aaa;

}
#content div label{
    margin: 20px 0;
    font-size: 20px;
    color: black;
}
#jbt{
    width: 100%;
    margin-top: 10px;
    background: skyblue;
    border: 0;
    font-size: 20px;
    color: white;
    opacity: 0.3;
    cursor: pointer;
    padding: 10px 0;
}
#jbt:hover{
    opacity: 1;
    background: white;
    color: skyblue;
    border: 3px solid skyblue;
    border-left: 0;
    border-right: 0;

}
#wDate{
    font-weight: 800;
}

</style>