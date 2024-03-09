<template>
  <div class="banner" id="home">
    <div class="content-parent d-flex flex-column col-6 col-sm-5 col-lg-4">
      <h2 class="content-text-style title">
        {{ title }}
      </h2>

      <span class="content-text-style">
        {{ description }}
      </span>

      <div class="banner-button-parent mt-3">
        <button class="btn btn-style">Get started!</button>
      </div>
    </div>
  </div>
</template>

<style src="./Banner.scss" lang="scss" scoped></style>
<script src="./Banner.js"></script>
