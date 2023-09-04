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
    @import '@/assets/Qs.css';
</style>