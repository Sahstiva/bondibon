<template>
  <section class="links">
    <div class="links-wrapper">
      <div class="links-item--opinion">интересует мнение профессионалов?
        <span class="links-item--small">cмотрите<br>отзывы практикующих<br>педагогов</span>
      </div>
      <div class="links-item--instagram">
        <div class="links-item--wrapper">
          <img src="~/assets/images/links_instagram.jpg" alt="Подписывайтесь на наш инстаграм!">
        </div>
      </div>
      <div class="links-item--come">заходите на наш youtube канал</div>
      <div class="links-item--youtube">
        <img src="~/assets/images/arrow.svg" class="arrow" alt="">
        <div class="links-item--wrapper">
          <img src="~/assets/images/links_youtube.png" alt="Cмотрите отзывы практикующих педагогов">
        </div>
        <div class="links-item--optsale">
          <p class="links-item--opttext">оптовые закупки</p>
        </div>
      </div>
      <div class="links-item--bgames">
        <div class="links-item--wrapper">
          <div class="links-item--redcircle">
            <img src="~/assets/images/links_bondibongames.png" alt="заходите на наш youtube канал">
          </div>
        </div>
        <p class="links-item--small">Веселые и увлекательные<br>видео для детей, подростков и их родителей</p>
      </div>
      <div class="links-item--subscribe">подписывайтесь<br>на наш инстаграм!
        <span class="links-item--small">Узнавайте первыми о новинках, акциях и розыгрышах призов от бренда</span>
        <div class="links-button--wrapper">
          <a class="links-button links-button--right">
            <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M37.3961 25.1602C38.2546 26.0461 38.2546 27.4835 37.3961 28.3694L26.3406 39.7816C25.4821 40.6675 24.0899 40.6675 23.2314 39.7816C22.3727 38.8952 22.3727 37.4583 23.2314 36.5719L34.2867 25.1602C35.1454 24.2738 36.5374 24.2738 37.3961 25.1602Z" fill="#E2BD9E"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5923 25.2579C12.4543 24.3677 13.8519 24.3677 14.714 25.2579L25.8132 36.7147C26.6752 37.6044 26.6752 39.0472 25.8132 39.9368C24.9512 40.8265 23.5535 40.8265 22.6916 39.9368L11.5923 28.4801C10.7303 27.5904 10.7303 26.1476 11.5923 25.2579Z" fill="#FFFFFF"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M24.6476 10.3119C25.8745 10.3038 26.8627 11.3107 26.8549 12.5614L26.7546 28.6619C26.7468 29.9126 25.7459 30.9325 24.5191 30.9401C23.2921 30.9483 22.3038 29.9408 22.3116 28.6907L22.412 12.5901C22.4198 11.34 23.4207 10.3195 24.6476 10.3119Z" fill="#E2BD9E"/>
              <path d="M24.5 2C36.9263 2 47 12.0734 47 24.4996C47 36.9259 36.9263 46.9998 24.5 46.9998C12.0735 46.9998 2 36.9259 2 24.4996C2 12.0733 12.0735 2 24.5 2Z" fill="black" fill-opacity="0.01" stroke="#E2BD9E" stroke-width="4"/>
            </svg>
          </a>
          <button class="links-button links-button" @click="$emit('goToNextPage', 'BBmap')">
            <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M37.3961 25.1602C38.2546 26.0461 38.2546 27.4835 37.3961 28.3694L26.3406 39.7816C25.4821 40.6675 24.0899 40.6675 23.2314 39.7816C22.3727 38.8952 22.3727 37.4583 23.2314 36.5719L34.2867 25.1602C35.1454 24.2738 36.5374 24.2738 37.3961 25.1602Z" fill="#E2BD9E"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5923 25.2579C12.4543 24.3677 13.8519 24.3677 14.714 25.2579L25.8132 36.7147C26.6752 37.6044 26.6752 39.0472 25.8132 39.9368C24.9512 40.8265 23.5535 40.8265 22.6916 39.9368L11.5923 28.4801C10.7303 27.5904 10.7303 26.1476 11.5923 25.2579Z" fill="#FFFFFF"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M24.6476 10.3119C25.8745 10.3038 26.8627 11.3107 26.8549 12.5614L26.7546 28.6619C26.7468 29.9126 25.7459 30.9325 24.5191 30.9401C23.2921 30.9483 22.3038 29.9408 22.3116 28.6907L22.412 12.5901C22.4198 11.34 23.4207 10.3195 24.6476 10.3119Z" fill="#E2BD9E"/>
              <path d="M24.5 2C36.9263 2 47 12.0734 47 24.4996C47 36.9259 36.9263 46.9998 24.5 46.9998C12.0735 46.9998 2 36.9259 2 24.4996C2 12.0733 12.0735 2 24.5 2Z" fill="black" fill-opacity="0.01" stroke="#E2BD9E" stroke-width="4"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BBlinks"
}
</script>

<style lang="scss" scoped>
.links {
  background-image: url('~assets/images/background_links.png');
  background-position: center top;
  background-repeat: no-repeat;
  width: 1920px;
  height: 700px;
  z-index: -3;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  @media (max-width: 1920px) {
    width: 100vw;
    background-position: center top;
  }
  &-wrapper {
    margin: 185px 0 0 170px;
    display: grid;
    grid-template-columns: 400px 400px 400px;
    grid-template-rows: repeat(2, 1fr);

    grid-auto-flow: row;
    grid-template-areas:
    "opinion instagram come"
    "youtube subscribe bgames";
    font-family: 'RotondaC', Helvetica, Arial, sans-serif;
    font-weight: bold;
    font-size: 20px;
    color: white;
    text-transform: uppercase;
    @media (max-width: 1920px) {
      margin: 185px 0 0 100px;
    }
    @media (max-width: 1024px) {
      margin: 190px 5px 0 5px;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 0;
    }
  }
  &-arrow {
    margin: 35px 0 0 50px;
    @media (max-width: 1024px) {
      margin: 10px 0 0 50px;
    }
  }
  &-item {
    display: flex;
    justify-content: center;
    align-items: center;
    &--wrapper {
      width: 173px;
      height: 173px;
      border-radius: 50%;
      background-color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 6.709px 4.357px 0 0 rgba(0, 0, 0, 0.09);
    }
    &--redcircle {
      width: 138px;
      height: 138px;
      border-radius: 50%;
      background-color: #d02027;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &--opinion {
      grid-area: opinion;
      font-size: 35px;
      text-align: right;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
    }
    &--instagram {
      grid-area: instagram;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &--come {
      grid-area: come;
      font-size: 35px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
    &--youtube {
      grid-area: youtube;
      font-size: 20px;
      position: relative;
      .arrow {
        position: absolute;
        top: 0;
        right: 0;
      }
      &:after {
        content: '';
        position: absolute;
        background-image: url('~assets/images/arrow.png');
        top: 0;
        right: 0;
      }
    }
    &--bgames {
      grid-area: bgames;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    &--video {
      grid-area: video;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
    &--small {
      font-size: 20px;
      text-align: left;
      margin: 10px 0 0 0;
    }
    &--subscribe {
      grid-area: subscribe;
      font-size: 35px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
    &--optsale {
      width: 300px;
      height: 49px;
      background-color: #d2beae;
      border-radius: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 25px 0 0 100px;
    }
    &--optext {
      font-size: 24px;
      font-family: Manrope-Regular, Arial, sans-serif;
      color: #ffffff;
      text-transform: uppercase;
      line-height: 26px;
      text-align: center;
    }
  }
  &-button {
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 2;
    padding: 0;
    width: 49px;
    height: 49px;
    &--right {
      transform: rotate(270deg);
    }
    &--wrapper {
      display: flex;
      flex-direction: row;
      width: 170px;
      justify-content: space-between;
      margin: 40px 0 0 15px;
    }
  }
}
</style>