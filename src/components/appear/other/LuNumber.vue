<script setup lang="ts">
import { ref, onMounted, computed, onUnmounted } from "vue";
interface Props {
  min: number;
  max: number;
  duration?: number;
  type?: "increase" | "decrease";
}

const props = withDefaults(defineProps<Props>(), {
  min: 0,
  max: 15,
  duration: 1, //设置默认过渡时间 基本单位秒 s
  type: "decrease", //默认增加
});

const intervalDuration = computed(
  () => (props.duration * 1000) / (props.max - props.min)
);

const currentNumber = ref<number>(
  props.type === "increase" ? props.min : props.max
);

let gradualChange: ReturnType<typeof setInterval>;
onMounted(() => {
  gradualChange = setInterval(() => {
    //增加动画只走这里
    if (props.type === "increase") {
      currentNumber.value = currentNumber.value + 1;
      if (currentNumber.value >= props.max) {
        clearInterval(gradualChange);
      }
    }
    //减少动画只走这里
    if (props.type === "decrease") {
      currentNumber.value = currentNumber.value - 1;
      if (currentNumber.value <= props.min) {
        clearInterval(gradualChange);
      }
    }
  }, intervalDuration.value);
});

onUnmounted(() => {
  clearInterval(gradualChange);
});
</script>

<template>
  <div>
    {{ currentNumber }}
  </div>
</template>

<style lang="less" scoped></style>
