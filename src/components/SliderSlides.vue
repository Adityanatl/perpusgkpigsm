<template>
  <div class="SliderSlides">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'SliderSlides',
};
</script>

<style lang="scss">
.SliderSlides {
  position: relative;
  width: 330px;
}
</style>