<template>
  <button class="weather-button"
  :style="width ? `width: ${width}px` : ''"
  >
    <slot/>
  </button>
</template>

<script>
  export default {

    props: {
      width: Number
    }
    
  }
</script>

<style lang="scss">

.weather-button {
  width: 50px;
  max-width: 150px;
  height: 50px;
  border: 1px solid #DAE9F4;
  border-radius: 10px;
  background: white;
  position: relative;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.5s ease;
}

.weather-button:hover {
  border-color: #75B6F2;
  transition: all 0.5s ease;
  .menu-svg {
    path {
      fill: #75B6F2;
      transition: all 0.5s ease;
    }
  }
  p {
    color: #75B6F2;
    transition: all 0.5s ease;
  }
  .rotate45, .rotate315 {
    background: #75B6F2;
  }
}

</style>