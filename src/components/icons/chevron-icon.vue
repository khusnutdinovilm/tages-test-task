<template>
  <svg
    class="chevron-svg"
    :class="{ 'chevron-svg_open': isChevronUp }"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.2929 7.29291L20.7071 8.70712L12 17.4142L3.29291 8.70712L4.70712 7.29291L12 14.5858L19.2929 7.29291Z"
      fill="black"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.2929 7.29291L20.7071 8.70712L12 17.4142L3.29291 8.70712L4.70712 7.29291L12 14.5858L19.2929 7.29291Z"
      fill="black"
    />
  </svg>
</template>

<script lang="ts">
export default {
  name: "chevron-icon",
};
</script>

<script setup lang="ts">
import { ChevronIconProps } from "@/types/props";

withDefaults(defineProps<ChevronIconProps>(), {
  isChevronUp: false,
});
</script>

<style>
.chevron-svg {
  transition: all 0.3s;
}
.chevron-svg_open {
  transform: rotate(-180deg);
}
</style>
