<template>
  <div
    id="page-container"
    class="d-flex flex-column flex-grow-1"
  >
    <Header @toggle-drawer="toggleDrawer" />

    <transition name="drawer-slide">
      <div v-if="drawer" class="drawer" @click="toggleDrawer">
        <div class="drawer-content">
          <!-- <slot></slot> -->
          <div class="icons-parent d-flex flex-column">
            <div
              class="icon-row d-flex justify-content-center"
              v-for="(icon, i) in icons"
              :key="i"
            >
              <component :is="icon"></component>
            </div>

            <div class="buttons-parent d-flex flex-column">
              <button class="btn login-style btn-style me-2">Login</button>
              <button class="btn signup-style btn-style">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <Banner />

    <div class="background-container">
      <div class="container background-container-style">
        <InvestmentPlan />

        <AboutNexus />

        <Guaranty />
      </div>
    </div>

    <FooterShared />
  </div>
</template>

<style src="./HomeView.scss" lang="scss" scoped></style>
<script src="./HomeView.js"></script>
