<template>
  <div class="side-bar-item"
  :class="currentPage === item[1] ? 'active__page' : ''"
  >
    <img :src="require(`../../assets/nav/${item[0]}.png`)">
    <p class="nav-title" :class="$store.state.sideBar === false ? 'title__none' : ''">{{ item[1] }}</p>
  </div>
</template>

<script>
  export default {
    name: 'side-bar-item',

    props: {
      item: {
        type: Array,
        required: true
      },
      currentPage: {
        type: String,
        required: true
      },

    }
  }
</script>

<style lang="scss" scoped>

.side-bar-item {
  margin-top: 25px;
  display: grid;
  align-content: center;
  padding: 10px;
  grid-template-columns: 25px 1fr;
  cursor: pointer;
  transition: all 0.5s ease;
  width: fit-content;
  border-radius: 12px;
  p {
    font-size: 18px;
    font-weight: 500;
    margin: 0 15px 0 20px;

  }
}

.side-bar-item:hover {
  color: #75B6F2;
  transition: all 0.5s ease;
}

.active__page {
  background: #75B6F2;
  color: white;
  transition: all 0.5s ease;
}

.active__page:hover {
  color: white;
}

.title__none {
  display: none;
}

</style>