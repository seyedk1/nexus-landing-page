<template>
  <div
    id="currency"
    class="container-fluid d-flex justify-content-center"
  >
    <div class="d-flex swiper-content">
      <swiper
        :modules="modules"
        :slides-per-view="4"
        :space-between="20"
        :navigation="true"
        :lazy="true"
        :autoplay="{
          delay: 1500,
          disableOnInteraction: false,
        }"
        :breakpoints="{
          '250': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '450': {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          '500': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '700': {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          '800': {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          '900': {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          '1100': {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          '1200': {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }"
        class="slider-main tumbnail-slider-images mySwiper"
      >
        <swiper-slide
          class="currency-slide-container d-flex"
          v-for="(item, i) in store.get_currencies"
          :key="i"
        >
          <div class="currency-image-parent">
            <img
              class="img-fluid"
              :src="item.image"
              :alt="item.name"
              loading="lazy"
              width="35"
            />
          </div>

          <div class="currency-info-parent">
            <h6 class="currency-title">{{ item.name }}</h6>

            <div class="currency-details d-flex">
              <p class="price">{{ item.trade_volume_24h_btc.toFixed(2) }}</p>
              <p class="price active">
                {{ item.trade_volume_24h_btc_normalized.toFixed(2) }}
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style src="./Currencies.scss" lang="scss" scoped></style>
<script src="./Currencies.js"></script>
