<template>
  <footer id="footer">
    <div class="footer-content container d-flex col-12">
      <div class="logo--follow-us-parent d-flex col-sm-4">
        <div class="logo-parent">
          <img
            class="img-fluid"
            src="@/assets/images/footer-logo.png"
            alt="logo"
            width="100"
          />
        </div>

        <div class="social-media-parent d-flex flex-column">
          <h6 class="text-style">Follow us</h6>

          <div class="social-images-parent d-flex">
            <img
              v-for="i in socialMedia"
              :key="i"
              class="img-fluid mx-2"
              :src="`/src/assets/images/socialMedia/${i}.png`"
              alt="linkedin"
              width="20"
              height="20"
            />
          </div>
        </div>
      </div>

      <div class="contact-us-parent col-sm-4">
        <h5 class="text-style">ContactUs</h5>

        <div
          class="second-row-parent d-flex flex-column justify-content-center"
        >
          <p>Don't Know how to invest?</p>
          <h6>Our support staff will answer all your questions</h6>
        </div>

        <div class="numbers-parent d-flex flex-column">
          <span>info@hedgefundnexus.com</span>
          <span>+46700482099</span>
        </div>
      </div>

      <div
        class="countries--about--contact-us-parent col-sm-4 d-flex flex-column"
      >
        <div class="first-row d-flex">
          <div class="about-us-news-parent d-flex flex-column">
            <span>About us</span>
            <span>News</span>
          </div>
          <div class="contact-us-help-parent d-flex flex-column">
            <span>Contact Us</span>
            <span>Help</span>
          </div>
        </div>

        <div class="second-row d-flex flex-column">
          <span>Countries</span>

          <div class="countries-parent d-flex">
            <img
              v-for="(country, i) in countries"
              :key="i"
              class="img-fluid countries-style"
              :src="`/src/assets/images/countries/${country}.png`"
              :alt="country"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style src="./FooterShared.scss" lang="scss" scoped></style>
<script src="./FooterShared.js"></script>
