<template>
  <main class="page-container">
    <div class="page-container__wrapper">
      <div v-if="!withoutBreadcrumbs" class="page-container__page-breadcrumbs">
        <breadcrumbs />
      </div>

      <h1 class="page-container__page-title">
        <slot name="page-title" />
      </h1>

      <div v-if="loadingContent" class="page-container__page-content-loading">
        <div class="loader"></div>
      </div>
      <div
        v-else-if="pageContentEmpty"
        class="page-container__page-content-empty"
      >
        <slot name="page-content-empty" />
      </div>
      <div v-else class="page-container__content">
        <slot name="page-content" />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "page-container",
};
</script>

<script setup>
import Breadcrumbs from "./breadcrumbs";

defineProps({
  withoutBreadcrumbs: {
    type: Boolean,
    required: false,
    default: false,
  },
  loadingContent: {
    type: Boolean,
    required: false,
    default: true,
  },
  pageContentEmpty: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<style>
.page-container {
}

.page-container__wrapper {
  max-width: 1488px;
  min-height: 100vh;
  /* box-sizing: border-box; */
  /* box-sizing: content-box; */
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  padding: 32px 12px 103px;
}

.page-container__breadcrumbs {
}

.page-container__page-title {
  font-family: var(--secondary-font-style);
  align-self: flex-start;
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
}

.page-container__page-content-loading,
.page-container__page-content-empty {
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.page-container__page-content {
  flex-grow: 1;
}

@media (min-width: 768px) {
  .page-container__page-title {
    font-size: 36px;
    line-height: 48px;
  }
}
</style>
