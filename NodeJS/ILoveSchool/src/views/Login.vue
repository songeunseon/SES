<template>
    <div class="login">
        <h3>Login</h3>
        <input type="text" v-model="email" placeholder="email"><br>
        <input type="password" v-model="password" placeholder="password"><br>
        <button v-on:click="login">로그인</button>
        <p>또는 페이스북 로그인<br>
            <button v-on:click="facebookLogin" class="facebook"><img src="@/assets/facebook.png"></button>
        </p>
        <p>만약 계정이 없다면, <RouterLink to="/signup">회원가입</RouterLink>을 먼저 진행해 주세요</p>
    </div>
</template>
<script>
import {RouterLink, useRouter} from 'vue-router'
import firebase from 'firebase'


const router = useRouter();

var provider = new firebase.auth.FacebookAuthProvider()
provider.addScope('public_profile')
provider.setCustomParameters({
    'display':'popup'
})


    export default{
        name:'login',
        data() {
            return{email:'',password:'' }
        },
        methods: {
            facebookLogin(){
                firebase.auth().signInWithPopup(provider).then(
                    (result)  => {
                        var token = result.credential.accessToken
                        var user = result.user
                        alert('로그인 성공')
                    }
                ).catch((err)=> {alert('에러 :'+err.message)})
            },
            login(){
                firebase.auth().signInWithEmailAndPassword(this.email,this.password).
                then((user) => { 
                        this.$session.set('user_id',user.user.uid)
                        this.$router.replace('msg');
                        alert('로그인 성공')
                    }).catch((err)=>{
                        alert('에러 :'+err.message)
                    })
                }
            }
        }
</script>
<style scoped>
    .login{
        width: 100%;
        height: 400px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        row-gap: 5px;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
    .login input{
        width: 300px;
        height: 30px;
        border: 0;
        border-bottom: 3px solid #aaa;
    }
    .login button{
        width: 300px;
        height: 30px;
        background: #fff;
        border: 3px solid #aaa;
        border-radius: 10px;
        margin-bottom: 20px;
        cursor: pointer;
    }
    .login p{
        width: 100%;
    }
    .login button:hover{
        border: 0;
        background: #aaa;
        color: #fff;
    }
    .login .facebook{
        margin: 0 auto;
        width: 100%;
        border: 0;
        background: #fff;
    }
    .login .facebook:hover{
        background:none;
    }
    .facebook img{
        width: 50px;
    }
</style>