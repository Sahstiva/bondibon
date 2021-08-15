<template>
  <section class="tablegames">
    <div class="tablegames-time">
      <div class="tablegames-time__wrapper">
        <p class="tablegames-time__text">
          делу время,<br>потехе - чаc
        </p>
          <button
              class="tablegames-time__button"
              @click="$emit('goToNextPage', 'BBgift')"
          >
            <img src="~/assets/images/arrow_down.svg" width="49"  height="49" alt="Далее">
          </button>
      </div>
    </div>
    <div class="tablegames-items">
      <div class="tablegames-items__item tablegames-items__antistress">игрушки-антистресс
        <span class="tablegames-items__nomobile">сквиши, тянучки, пружинки, мякиши и лизуны</span>
      </div>
      <div class="tablegames-items__item tablegames-items__transport">
        транспорт<span class="tablegames-items__nomobile">машинки, треки, железные дороги</span>
      </div>
      <div class="tablegames-items__item tablegames-items__rolegames">
        сюжетно-ролевые игрушки
      </div>
      <div class="tablegames-items__item tablegames-items__dolls">
        куклы и пупсы
      </div>
      <div class="tablegames-items__item tablegames-items__newborn">
        игрушки для малышей
      </div>
    </div>
    <button
        class="tablegames-mobile__button"
        @click="$emit('goToNextPage', 'BBgift')"
    >
      <img src="~/assets/images/arrow_down.svg" width="49"  height="49" alt="Далее">
    </button>
  </section>
</template>

<script>
export default {
  name: 'BBtablegames',
};
</script>
