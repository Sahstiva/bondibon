<template>
  <section class="microscope">
    <div class="microscope-wannaknow">
      <div class="microscope-wannaknow__wrapper">
        <p class="microscope-wannaknow__text">
          хочу всё знать!
        </p>
        <button
            class="microscope-wannaknow__button"
            @click="$emit('goToNextPage', 'BBmosaic')"
        >
          <img src="~/assets/images/arrow_down.svg" width="49"  height="49" alt="Далее">
        </button>
      </div>
    </div>
    <div class="microscope-items">
      <div class="microscope-items__item microscope-items__microscope">
        микроскопы
      </div>
      <div class="microscope-items__item microscope-items__science">
        научные опыты
      </div>
      <div class="microscope-items__item microscope-items__digger">
        наборы для раскопок<span class="microscope-items__nomobile"> археология и палеонтолия</span>
      </div>
      <div class="microscope-items__item microscope-items__entertainment">
        развлекательные эксперименты
      </div>
      <div class="microscope-items__item microscope-items__magic">
        наборы фокусника
      </div>
    </div>
    <button
        class="microscope-mobile__button"
        @click="$emit('goToNextPage', 'BBmosaic')"
    >
      <img src="~/assets/images/arrow_down.svg" width="49"  height="49" alt="Далее">
    </button>
  </section>
</template>

<script>
export default {
  name: 'BBmicroscope',
};
</script>
