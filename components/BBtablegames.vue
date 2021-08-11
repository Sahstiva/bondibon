<template>
  <section class="tablegames">
    <div class="tablegames-wrapper--img">
      <img src="~/assets/images/tablegames.png" alt="Делу время, потехе - чаc" class="tablegames-img">
      <div class="tablegames-wrapper--wrapper">
        <p class="tablegames-text">делу время,<br>потехе - чаc</p>
        <div class="tablegames-button--wrapper">
          <button class="tablegames-button" @click="$emit('goToNextPage', 'BBgift')">
            <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M37.3961 25.1602C38.2546 26.0461 38.2546 27.4835 37.3961 28.3694L26.3406 39.7816C25.4821 40.6675 24.0899 40.6675 23.2314 39.7816C22.3727 38.8952 22.3727 37.4583 23.2314 36.5719L34.2867 25.1602C35.1454 24.2738 36.5374 24.2738 37.3961 25.1602Z" fill="#E2BD9E"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5923 25.2579C12.4543 24.3677 13.8519 24.3677 14.714 25.2579L25.8132 36.7147C26.6752 37.6044 26.6752 39.0472 25.8132 39.9368C24.9512 40.8265 23.5535 40.8265 22.6916 39.9368L11.5923 28.4801C10.7303 27.5904 10.7303 26.1476 11.5923 25.2579Z" fill="#CA042C"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M24.6476 10.3119C25.8745 10.3038 26.8627 11.3107 26.8549 12.5614L26.7546 28.6619C26.7468 29.9126 25.7459 30.9325 24.5191 30.9401C23.2921 30.9483 22.3038 29.9408 22.3116 28.6907L22.412 12.5901C22.4198 11.34 23.4207 10.3195 24.6476 10.3119Z" fill="#E2BD9E"/>
              <path d="M24.5 2C36.9263 2 47 12.0734 47 24.4996C47 36.9259 36.9263 46.9998 24.5 46.9998C12.0735 46.9998 2 36.9259 2 24.4996C2 12.0733 12.0735 2 24.5 2Z" fill="black" fill-opacity="0.01" stroke="#E2BD9E" stroke-width="4"/>
            </svg>
          </button>
<!--          <button class="tablegames-button tablegames-button&#45;&#45;up" @click="$emit('goToNextPage', 'BBevamoda')">-->
<!--            <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--              <path fill-rule="evenodd" clip-rule="evenodd" d="M37.3961 25.1602C38.2546 26.0461 38.2546 27.4835 37.3961 28.3694L26.3406 39.7816C25.4821 40.6675 24.0899 40.6675 23.2314 39.7816C22.3727 38.8952 22.3727 37.4583 23.2314 36.5719L34.2867 25.1602C35.1454 24.2738 36.5374 24.2738 37.3961 25.1602Z" fill="#E2BD9E"/>-->
<!--              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5923 25.2579C12.4543 24.3677 13.8519 24.3677 14.714 25.2579L25.8132 36.7147C26.6752 37.6044 26.6752 39.0472 25.8132 39.9368C24.9512 40.8265 23.5535 40.8265 22.6916 39.9368L11.5923 28.4801C10.7303 27.5904 10.7303 26.1476 11.5923 25.2579Z" fill="#CA042C"/>-->
<!--              <path fill-rule="evenodd" clip-rule="evenodd" d="M24.6476 10.3119C25.8745 10.3038 26.8627 11.3107 26.8549 12.5614L26.7546 28.6619C26.7468 29.9126 25.7459 30.9325 24.5191 30.9401C23.2921 30.9483 22.3038 29.9408 22.3116 28.6907L22.412 12.5901C22.4198 11.34 23.4207 10.3195 24.6476 10.3119Z" fill="#E2BD9E"/>-->
<!--              <path d="M24.5 2C36.9263 2 47 12.0734 47 24.4996C47 36.9259 36.9263 46.9998 24.5 46.9998C12.0735 46.9998 2 36.9259 2 24.4996C2 12.0733 12.0735 2 24.5 2Z" fill="black" fill-opacity="0.01" stroke="#E2BD9E" stroke-width="4"/>-->
<!--            </svg>-->
<!--          </button>-->
        </div>
      </div>
    </div>
    <div class="tablegames-wrapper--items">
      <div class="tablegames-item tablegames-item--antistress">игрушки-антистресс<span class="tablegames-item--small">сквиши, тянучки, пружинки, мякиши и лизуны</span></div>
      <div class="tablegames-item tablegames-item--transport">транспорт<span class="tablegames-item--small">машинки, треки, железные дороги</span></div>
      <div class="tablegames-item tablegames-item--rolegames">сюжетно-ролевые игрушки</div>
      <div class="tablegames-item tablegames-item--dolls">куклы и пупсы</div>
      <div class="tablegames-item tablegames-item--newborn">игрушки для малышей</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BBtablegames"
}
</script>

<style lang="scss" scoped>
.tablegames {
  background-image: url('~assets/images/background_tablegames.png');
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
  @media (max-width: 1023px) {
    background-image: url('~assets/mobile/background_tablegames_mobile.png');
    background-position: center top;
    background-repeat: no-repeat;
    width: 100%;
    max-width: 480px;
    height: 800px;
  }
  &-img {
    @media (max-width: 1023px) {
      display: none;
    }
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
    @media (max-width: 1023px) {
      text-align: center;
    }
    &--small {
      font-size: 17px;
      @media (max-width: 1023px) {
        display: none;
      }
    }
  }

  &-icon {
    margin: 0 0 0 100px;
  }

  &-wrapper {
    &--img {
      margin: 62px 0 0 calc(1920px/2 - 870px/2 - 548px);
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 1920px) {
        margin: 62px 0 0 calc(50vw - 870px/2 - 647px);
      }
      @media (max-width: 1600px) {
        margin: 62px 0 0 calc(50vw - 870px/2 - 487px);
      }
      @media (max-width: 1440px) {
        margin: 62px 0 0 calc(50vw - 870px/2 - 407px);
      }
      @media (max-width: 1280px) {
        margin: 62px 0 0 calc(50vw - 870px/2 - 325px);
      }
      @media (max-width: 1024px) {
        margin: 62px 0 0 calc(50vw - 870px/2 - 199px);
      }
      @media (max-width: 1023px) {
        width: unset;
        margin: 220px 0 10px 0;
      }
    }

    &--items {
      margin: -50px 0 0 0;
      display: grid;
      grid-template-columns: repeat(5, 170px);
      grid-column-gap: 30px;
      @media (max-width: 1023px) {
        grid-template-columns: 1fr;
        grid-row-gap: 10px;
        margin: 0;
        width: 90%;
        max-width: 375px;
      }
    }

    &--wrapper {
      margin: 120px 0 0 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (max-width: 1023px) {
        position: relative;
        margin: 120px 0 0 0;
      }
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
    font-size: 20px;
    text-transform: uppercase;
    text-align: center;
    @media (max-width: 1023px) {
      width: 100%;
      height: 47px;
      border-radius: 24px;
    }

    &--small {
      font-size: 15px;
      @media (max-width: 1023px) {
        display: none;
      }
    }

    &--antistress {
      background-color: #2c9c75;
    }
    &--transport {
      background-color: #32b3ad;
    }
    &--rolegames {
      background-color: #35b2bd;
    }
    &--dolls {
      background-color: #37b0c4;
    }
    &--newborn {
      background-color: #79dbea;
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
    &--up {
      transform: rotate(180deg);
    }
    &--wrapper {
      display: flex;
      flex-direction: row;
      width: 49px;
      justify-content: space-between;
      @media (max-width: 1023px) {
        position: absolute;
        top: 375px;
      }
    }
  }
}
</style>