<template>
  <div class="svg-icons-guaranty-parent d-flex justify-content-around">
    <div
      class="single-guaranty-parent d-flex flex-column align-items-center"
      v-for="(item, i) in guaranties"
      :key="i"
    >
      <div class="svg-icon-parent">
        <component :is="item.icon"></component>
      </div>
      <h5 class="svg-guaranty-title">{{ item.title }}</h5>

      <p class="svg-guaranty-text">
        {{ item.text }}
      </p>
    </div>
  </div>
</template>

<style src="./SingleGuaranty.scss" lang="scss" scoped></style>
<script src="./SingleGuaranty.js"></script>
