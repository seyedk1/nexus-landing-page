<template>
  <div class="header-parent d-flex">
    <div class="logo-parent d-flex justify-content-end">
      <img
        class="img-fluid"
        src="@/assets/images/logo.png"
        alt="logo"
        width="100"
      />
    </div>
    <div class="icons-parent d-flex">
      <component :is="icon" v-for="(icon, i) in icons" :key="i"></component>
    </div>
    <div class="buttons-parent d-flex">
      <button class="btn login-style btn-style me-2">Login</button>
      <button class="btn signup-style btn-style">Sign up</button>
    </div>

    <div class="parent-menu-icon">
      <svg-icon
        type="mdi"
        :path="path"
        @click="$emit('toggleDrawer')"
      ></svg-icon>
    </div>
  </div>
</template>

<style src="./Header.scss" lang="scss" scoped></style>
<script src="./Header.js"></script>
