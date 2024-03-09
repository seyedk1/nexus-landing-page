<template>
  <div id="investment" class="investment-plan-container">
    <div class="investment-btn-parent d-flex">
      <div
        class="parent-single-button d-flex justify-content-center align-items-center"
      >
        <button class="btn btn-style">Investment Plan</button>
      </div>
    </div>

    <div class="investment-plan-cards-container d-flex">
      <div class="card-parent">
        <img
          class="img-fluid chart-style"
          src="/src/assets/images/chart.png"
          alt="chart"
        />
        <div class="card-content">
          <button class="btn btn-style">Investment Plan</button>
          <h5 class="text">Minimum 100$</h5>
        </div>
      </div>

      <div class="card-parent">
        <div class="card-content">
          <div
            class="parent-single-button d-flex justify-content-center align-items-center"
          >
            <button class="btn btn-style">Contract Period</button>
          </div>
          <div class="contract-btns-parent d-flex">
            <button
              class="btn contract-btn-style"
              v-for="(item, i) in contractPeriods"
              :key="i"
            >
              {{ item + " months" }}
            </button>
          </div>
        </div>
      </div>

      <div class="card-parent">
        <div class="card-content">
          <div
            class="parent-single-button d-flex justify-content-center align-items-center"
          >
            <button class="btn btn-style">Investment Profit Percentage</button>
          </div>
          <div class="contract-btns-parent profit-percentage-btn-layout d-flex">
            <button
              class="btn contract-btn-style"
              v-for="(item, i) in contractPeriods"
              :key="i"
            >
              {{ item + " months" }}
            </button>
          </div>

          <div class="coins--plan-btn-parent d-flex">
            <div class="parent-plan-button">
              <button class="btn plan-button">Monthly</button>
            </div>
            <div class="coins-parent d-flex">
              <div
                class="each-coin-parent d-flex"
                v-for="(item, j) in profitPercentage"
                :key="j"
              >
                <div class="paren-coin-img d-flex align-items-center me-1">
                  <img
                    class="img-fluid"
                    src="/src/assets/images/coin.png"
                    alt="coin"
                    width="40"
                  />
                </div>
                <span class="profit-percentage">{{ item }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./InvestmentPlan.scss" lang="scss" scoped></style>
<script src="./InvestmentPlan.js"></script>
