<script setup lang="ts">
import { getCommonListApi } from "@/network/api/api";
import vueLogo from "@/assets/logo.png";
function getCommonList() {
  getCommonListApi();
}
</script>
<template>
  <img alt="Vue logo" :src="vueLogo" @click="getCommonList" />
</template>
