<template>
  <section class="evamoda">
    <div class="evamoda-wrapper--img">
      <img src="~/assets/images/evamoda.png" alt="КОСМЕТИКА ДЕТСКАЯ, НАБОРЫ ДЛЯ СОЗДАНИЯ УКРАШЕНИЙ, СУМОЧКИ И АКСЕССУАРЫ" class="evamoda-img">
      <div class="evamoda-wrapper--wrapper">
        <p class="evamoda-text">красота<br>спасёт мир!</p>
        <p class="evamoda-text evamoda-text--small">косметика детская, наборы для создания украшений, сумочки и аксессуары</p>
        <button class="evamoda-button" @click="$emit('goToNextPage', 'BBtablegames')">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56px" height="56px"
              class="evamoda-icon">f
            <path fill-rule="evenodd"  fill="rgb(226, 189, 158)"
                  d="M39.530,27.473 C40.388,28.359 40.388,29.796 39.530,30.682 L28.475,42.094 C27.616,42.980 26.224,42.980 25.365,42.094 C24.507,41.208 24.507,39.770 25.365,38.884 L36.420,27.473 C37.279,26.586 38.671,26.586 39.530,27.473 Z"/>
            <path fill-rule="evenodd"  fill="rgb(202, 4, 44)"
                  d="M13.726,27.570 C14.588,26.680 15.986,26.680 16.847,27.570 L27.947,39.027 C28.809,39.917 28.809,41.360 27.947,42.249 C27.085,43.139 25.687,43.139 24.825,42.249 L13.726,30.792 C12.864,29.902 12.864,28.460 13.726,27.570 Z"/>
            <path fill-rule="evenodd"  fill="rgb(226, 189, 158)"
                  d="M26.782,12.624 C28.008,12.616 28.997,13.623 28.989,14.874 L28.888,30.974 C28.881,32.225 27.880,33.245 26.653,33.253 C25.426,33.261 24.438,32.253 24.445,31.003 L24.546,14.903 C24.554,13.653 25.554,12.632 26.782,12.624 Z"/>
            <path fill-rule="evenodd"  stroke="rgb(226, 189, 158)" stroke-width="4px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"
                  d="M26.625,2.312 C40.156,2.312 51.125,13.281 51.125,26.812 C51.125,40.343 40.156,51.312 26.625,51.312 C13.094,51.312 2.125,40.343 2.125,26.812 C2.125,13.281 13.094,2.312 26.625,2.312 Z"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="evamoda-wrapper--items">
      <div class="evamoda-item evamoda-item--evamoda">eva moda<br>косметика<br>детская</div>
      <div class="evamoda-item evamoda-item--bodyart">боди-арт, переводные татуировки,<br>дизайн ногтей</div>
      <div class="evamoda-item evamoda-item--accesoires">наборы для создания украшений и аксессуаров</div>
      <div class="evamoda-item evamoda-item--umbrella">десткие зонтики и сумочки</div>
      <div class="evamoda-item evamoda-item--bags">сумки для раскрашивания</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BBevamoda"
}
</script>

<style lang="scss" scoped>
.evamoda {
  background-image: url('~assets/images/background_evamoda.png');
  background-position: 50px top;
  background-repeat: no-repeat;
  width: 1920px;
  z-index: -3;
  opacity: 1;
  transform: translateZ(0);
  perspective: 1000px;
  backface-visibility: hidden;
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0 0 0;
  @media (max-width: 1920px) {
    width: 100vw;
    background-position: center top;
  }

  &-text {
    font-family: 'RotondaC', 'Arial Rounded MT Bold', sans-serif;
    font-weight: bold;
    font-size: 30px;
    text-transform: uppercase;
    text-align: left;
    color: #d2beae;
    max-width: 300px;
    margin: 0;
    &--small {
      font-size: 17px;
    }
  }

  &-icon {
    margin: 0 0 0 100px;
  }

  &-wrapper {
    &--img {
      margin: 115px 0 0 calc(1920px/2 - 1021px/2 - 330px);
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 1920px) {
        margin: 110px 0 0 calc(50vw - 1021px/2 - 430px);
      }
      @media (max-width: 1600px) {
        margin: 110px 0 0 calc(50vw - 1021px/2 - 270px);
      }
      @media (max-width: 1440px) {
        margin: 110px 0 0 calc(50vw - 1021px/2 - 190px);
      }
      @media (max-width: 1280px) {
        margin: 110px 0 0 calc(50vw - 1021px/2 - 110px);
      }
      @media (max-width: 1024px) {
        margin: 110px 0 0 calc(50vw - 1021px/2 + 10px);
      }
    }

    &--items {
      margin: -50px 0 0 0;
      display: grid;
      //width: 1050px;
      grid-template-columns: repeat(5, 170px);
      grid-column-gap: 30px;
      //@media (max-width: 1024px) {
      //  width: 1000px;
      //}
    }

    &--wrapper {
      margin: 120px 0 0 40px;
      display: flex;
      flex-direction: column;
    }
  }
  &-item {
    border-radius: 50%;
    box-shadow: 6.709px 4.357px 0px 0px rgba(0, 0, 0, 0.09);
    width: 170px;
    height: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #ffffff;
    font-family: 'RotondaC', 'Arial Rounded MT Bold', sans-serif;
    font-weight: bold;
    font-size: 15px;
    text-transform: uppercase;
    text-align: center;

    &--evamoda {
      background-color: #923a6c;
    }
    &--bodyart {
      background-color: #b06ec8;
    }
    &--accesoires {
      background-color: #f9aad3;
    }
    &--umbrella {
      background-color: #faaca8;
    }
    &--bags {
      background-color: #f76e67;
    }
  }
  &-button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
}
</style>