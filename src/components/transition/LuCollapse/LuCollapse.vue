<script setup lang="ts">
interface Props {
  show: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  show: false,
});
</script>
<template>
  <Transition name="collapse">
    <div v-show="props.show" style="display: inline-block"><slot></slot></div>
  </Transition>
</template>

<style lang="less" scoped>
/* 下面我们会解释这些 class 是做什么的 */
.collapse-enter-active,
.collapse-leave-active {
  transition: all;
  transition-duration: 0.5s;
  transition-timing-function: ease;
}

.collapse-enter-from,
.collapse-leave-to {
  transform: scale(0);
}
</style>
