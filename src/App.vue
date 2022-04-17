<script setup lang="ts"></script>

<template>
  <router-view />
</template>

<style lang="less">
@import "./assets/css/base.css";
#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

* {
  /*避免子元素宽高为100%的时候影响到父元素的宽高 此时子元素宽高100%仅代表父元素content部分的宽高*/
  box-sizing: border-box;
}
</style>
