<template>
  <section class="microscope">
    <div class="microscope-wannaknow">
      <div class="microscope-wannaknow--wrapper">
        <p class="microscope-wannaknow--text">
          хочу всё знать!
        </p>
        <button
            class="microscope-wannaknow--button"
            @click="$emit('goToNextPage', 'BBmosaic')"
        >
          <img src="~/assets/images/arrow_down.svg" alt="Далее">
        </button>
      </div>
    </div>
    <div class="microscope-items">
      <div class="microscope-items--item microscope-items--microscope">
        микроскопы
      </div>
      <div class="microscope-items--item microscope-items--science">
        научные опыты
      </div>
      <div class="microscope-items--item microscope-items--digger">
        наборы для раскопок<span class="microscope-items--nomobile"> археология и палеонтолия</span>
      </div>
      <div class="microscope-items--item microscope-items--entertainment">
        развлекательные эксперименты
      </div>
      <div class="microscope-items--item microscope-items--magic">
        наборы фокусника
      </div>
    </div>
    <button
        class="microscope-mobile--button"
        @click="$emit('goToNextPage', 'BBmosaic')"
    >
      <img src="~/assets/images/arrow_down.svg" alt="Далее">
    </button>
  </section>
</template>

<script>
export default {
  name: 'BBmicroscope',
};
</script>

