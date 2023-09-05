<script setup>
    defineProps({  //넘겨받은 값  오류를 최소화하기위해서 type을 정해주는것 ,, 유효성검사를 하는것
        msg:{type:String,required:true},
        info:{type:Array,required:true}
    })
</script>
<template>
    <div class="slide">
        <h2>{{ msg }}</h2>
        <div class="slide_box">
            <div class="card" v-for="a in info" :key="a">
                <img src="@/assets/maltese.png">
                <p>{{a}}</p>
                <p>수컷</p>
            </div>
        </div>
    </div>
</template>
<style>
</style>