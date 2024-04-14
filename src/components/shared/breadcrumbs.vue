<template>
  <div class="breadcrumbs">
    <div class="breadcrumbs__wrapper">
      <template v-for="(breadcrumb, idx) in breadcrumbs" :key="breadcrumb.to">
        <div v-if="idx !== 0" class="breadcrumbs__del">/</div>
        <a
          class="breadcrumbs__link"
          :class="{ breadcrumbs__link_active: idx === breadcrumbs.length - 1 }"
          :href="breadcrumb.to"
        >
          {{ breadcrumb.name }}
        </a>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const breadcrumbs = ref([
  {
    to: "",
    name: "Главная",
  },
  {
    to: "",
    name: "Системы хранения",
  },
  {
    to: "",
    name: "Комплекты стеллажных систем",
  },
]);
</script>

<style>
.breadcrumbs {
  font-family: var(--main-font-style);
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
}

.breadcrumbs__wrapper {
  display: flex;
  flex-flow: row nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  gap: 5px;
  scrollbar-width: none;
}

.breadcrumbs__wrapper::-webkit-scrollbar {
  height: 0;
}

.breadcrumbs__link,
.breadcrumbs__del {
  cursor: pointer;
  color:  var(--secondary-font-color);
  text-decoration: none;
}

.breadcrumbs__link_active {
  color:  var(--main-font-color);
  cursor: default;
  pointer-events: none;
}
</style>
