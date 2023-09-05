<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopMenu from './components/TopMenu.vue'
</script>

<template>
  <header>
    <div id="header_wrap">
      <div class="logo">
        <RouterLink to="/"><img src="@/assets/logo.png"/></RouterLink>
      </div>
      <div class="menu_wrap">
        <TopMenu/>
        <nav class="nav">
          <div class="menu"><RouterLink to="/intro">센터소개</RouterLink></div>
          <div class="menu"><RouterLink to="/information">동물보호정보</RouterLink></div>
          <div class="menu"><RouterLink to="/adoption">입양</RouterLink></div>
          <div class="menu"><RouterLink to="/join">참여소통</RouterLink></div>
          <div class="menu"><RouterLink to="/park">반려동물공원</RouterLink></div>
        </nav>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  #app{
    width: 100%;
    position: relative;
  }
  header{
    width: 100%;
    position: relative;
  }
  #header_wrap{
    width: 1200px;
    margin: 25px auto;
    display: flex;
    align-items: center;
    padding: 30px 0;
  }
  #header_wrap .logo{
    width: 200px;
  }
  #header_wrap .logo img{
    width: 100%;
  }
  .menu_wrap{
    width: 100%;
  }
  .menu_wrap .nav{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
</style>
