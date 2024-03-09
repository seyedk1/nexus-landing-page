<template>
  <div id="about" class="about-nexus-parent col-12 d-flex">
    <div
      class="about-nexus-content col-sm-8 col-12 d-flex flex-column align-items-start"
    >
      <div class="about-title-parent d-flex justify-content-start">
        <h1>About Nexus</h1>
      </div>
      <h6 class="about-text">
       {{ aboutUs }}
      </h6>

      <div class="about-nexus-btn-parent">
        <button class="btn btn-style">Learn More</button>
      </div>
    </div>
    <div class="about-nexus-image-parent col-sm-4 col-12 d-flex">
      <img
        class="img-fluid image-style"
        src="@/assets/images/smart-phone.png"
        alt="smart"
      />
    </div>
  </div>
</template>

<style src="./AboutNexus.scss" lang="scss" scoped></style>
<script src="./AboutNexus.js"></script>
