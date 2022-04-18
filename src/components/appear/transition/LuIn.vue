<script setup lang="ts"></script>

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
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
