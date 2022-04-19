<script setup lang="ts">
import { computed } from "vue";

interface Props {
  show: boolean;
  collapseDirection?: "toTop" | "toBottom" | "toRight" | "toLeft"; //根据以下逻辑 组件在方向参数的情况未传的情况下默认是向下展开的
}
const props = withDefaults(defineProps<Props>(), {
  show: false,
  collapseDirection: "toBottom",
});

const animationOrigin = computed(() => {
  if (props.collapseDirection === "toTop") return "bottom";
  else if (props.collapseDirection === "toLeft") return "right";
  else if (props.collapseDirection === "toRight") return "left";
  else return "top";
});

const animation = computed(() => {
  if (
    animationOrigin.value.includes("right") ||
    animationOrigin.value.includes("left")
  ) {
    return {
      start: "scaleX(0)",
      end: "scaleX(1)",
    };
  } else {
    return {
      start: "scaleY(0)",
      end: "scaleY(1)",
    };
  }
});
</script>
<template>
  <Transition name="collapse">
    <div v-show="props.show" style="display: inline-block"><slot></slot></div>
  </Transition>
</template>

<style lang="less" scoped>
/* 下面我们会解释这些 class 是做什么的 */
.collapse-enter-active {
  animation: collapse;
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
}
.collapse-leave-active {
  animation: collapse;
  animation-duration: 0.3s;
  animation-direction: reverse;
  animation-timing-function: ease-in-out;
}

@keyframes collapse {
  0% {
    transform-origin: v-bind(animationOrigin);
    transform: v-bind("animation.start");
  }

  100% {
    transform-origin: v-bind(animationOrigin);
    transform: v-bind("animation.end");
  }
}
</style>
