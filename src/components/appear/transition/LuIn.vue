<script setup lang="ts">
import { computed } from "vue";

interface Props {
  inDirection?: "top" | "bottom" | "right" | "left"; //根据以下逻辑 组件在方向参数的情况未传的情况下默认是向上过渡进入的
}
const props = withDefaults(defineProps<Props>(), {
  inDirection: "bottom",
});

const translateStart = computed(() => {
  if (props.inDirection === "top") return "translateY(-10px)";
  else if (props.inDirection === "right") return "translateX(10px)";
  else if (props.inDirection === "left") return "translateY(-10px)";
  else return "translateY(10px)";
});

const translateEnd = computed(() => {
  if (translateStart.value.includes("Y")) {
    return "translateY(0px)";
  } else {
    return "translateX(0px)";
  }
});
</script>

<template>
  <Transition appear appear-active-class="active-class ">
    <slot></slot>
  </Transition>
</template>

<style lang="less" scoped>
.active-class {
  animation-name: in;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

@keyframes in {
  0% {
    opacity: 0;
    transform: v-bind(translateStart);
  }
  100% {
    opacity: 1;
    transform: v-bind(translateEnd);
  }
}
</style>
