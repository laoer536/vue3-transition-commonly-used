<script setup lang="ts">
import LuIn from "@components/appear/transition/LuIn.vue";
import LuNumber from "@components/appear/other/LuNumber.vue";
</script>

<template>
  <lu-in>
    <div>LuIn</div>
  </lu-in>
  <lu-number :min="50" :max="100" />
</template>

<style lang="less" scoped></style>
