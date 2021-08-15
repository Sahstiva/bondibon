<template>
  <section class="tablegames">
    <div class="tablegames-time">
      <div class="tablegames-time--wrapper">
        <p class="tablegames-time--text">
          делу время,<br>потехе - чаc
        </p>
          <button
              class="tablegames-time--button"
              @click="$emit('goToNextPage', 'BBgift')"
          >
            <img src="~/assets/images/arrow_down.svg" alt="Далее">
          </button>
      </div>
    </div>
    <div class="tablegames-items">
      <div class="tablegames-items--item tablegames-items--antistress">
        игрушки-антистресс<span class="tablegames-items--nomobile">сквиши, тянучки, пружинки, мякиши и лизуны</span>
      </div>
      <div class="tablegames-items--item tablegames-items--transport">
        транспорт<span class="tablegames-items--nomobile">машинки, треки, железные дороги</span>
      </div>
      <div class="tablegames-items--item tablegames-items--rolegames">
        сюжетно-ролевые игрушки
      </div>
      <div class="tablegames-items--item tablegames-items--dolls">
        куклы и пупсы
      </div>
      <div class="tablegames-items--item tablegames-items--newborn">
        игрушки для малышей
      </div>
    </div>
    <button
        class="tablegames-mobile--button"
        @click="$emit('goToNextPage', 'BBgift')"
    >
      <img src="~/assets/images/arrow_down.svg" alt="Далее">
    </button>
  </section>
</template>

<script>
export default {
  name: 'BBtablegames',
};
</script>

