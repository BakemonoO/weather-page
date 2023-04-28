<template>
  <div class="footer-list">
    <p class="title">{{ title }}</p>
    <slot/>
    <div class="list__item">
      <p v-for="link in links" :key="link">{{ link }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'footer-list',

    props: {
      title: {
        type: String,
        required: true
      },
      links: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>

.footer-list {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}

.title {
  font-size: 21px;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.5s ease;
}

.list__item {
  display: flex;
  flex-direction: column;
  p {
    font-size: 16px;
    color: #A0A7AF;
    margin-top: 20px;
    cursor: pointer;
    transition: all 0.5s ease;
    width: fit-content;
  }
}

.title:hover {
  opacity: 0.8;
  transition: all 0.5s ease;
}

.list__item p:hover {
  color: #75B6F2;
  transition: all 0.5s ease;
}

</style>