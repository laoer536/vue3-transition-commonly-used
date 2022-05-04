<script setup lang="ts">
import LuIn from "@components/appear/transition/LuIn.vue";
import LuNumber from "@components/appear/other/LuNumber.vue";
import { loading } from "@components/other/Loading/index";

const openLoading = (show: boolean) => {
  loading(show);
};
</script>

<template>
  <lu-in>
    <div>LuIn</div>
  </lu-in>
  <lu-number :min="50" :max="100" />
  <div style="margin-top: 20px; margin-bottom: 20px" @click="openLoading(true)">
    点击函数式创造loading
  </div>
  <div @click="openLoading(false)">点击函数式取消显示loading</div>
</template>

<style lang="less" scoped>
.top {
  height: 160vh;
  background-color: black;
}
</style>
