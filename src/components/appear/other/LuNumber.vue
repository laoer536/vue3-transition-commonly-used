<script setup lang="ts">
import { ref, onMounted, computed, onUnmounted } from "vue";
interface Props {
  min: number;
  max: number;
  duration?: number;
}

const props = withDefaults(defineProps<Props>(), {
  min: 0,
  max: 15,
  duration: 1, //设置默认过渡时间
});

const intervalDuration = computed(
  () => (props.duration * 1000) / (props.max - props.min)
);

const currentNumber = ref(props.min);
let gradualChange: ReturnType<typeof setInterval>;
onMounted(() => {
  gradualChange = setInterval(() => {
    currentNumber.value = currentNumber.value + 1;
    if (currentNumber.value === props.max) {
      clearInterval(gradualChange);
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
