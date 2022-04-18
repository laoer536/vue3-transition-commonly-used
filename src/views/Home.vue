<script setup lang="ts">
import { ref } from "vue";
import LuCollapse from "@components/transition/LuCollapse/LuCollapse.vue";
import LuFade from "@components/transition/LuFade/LuFade.vue";
import LuZoom from "@components/transition/LuZoom/LuZoom.vue";
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
      <lu-zoom :show="show">
        <div
          style="
            background-color: black;
            color: white;
            height: 200px;
            width: 200px;
            border-radius: 10px;
          "
        >
          Zoom
        </div>
      </lu-zoom>
    </div>
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
