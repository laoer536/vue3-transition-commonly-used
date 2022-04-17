<script setup lang="ts">
import LuCollapse from "@components/transition/LuCollapse/LuCollapse.vue";
import { ref } from "vue";
import LuFade from "@components/transition/LuFade/LuFade.vue";
const show = ref<boolean>(false);
function changeShow() {
  show.value = !show.value;
}
</script>
<template>
  <button @click="changeShow">点击切换状态</button>
  <br />
  <div class="container">
    <div><lu-fade :show="show">Fade</lu-fade></div>
    <div>
      <lu-collapse :show="show">
        <div
          style="
            background-color: black;
            color: white;
            height: 200px;
            width: 200px;
          "
        >
          Collapse
        </div>
      </lu-collapse>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  gap: 80px;
}
</style>
