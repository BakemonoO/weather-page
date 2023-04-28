<template>
  <div class="side-bar-list"
  :class="$store.state.sideBar ? 'active__list' : ''"
  >
  <side-bar-item v-for="item in navArray" :key="item[1]" :item="item" :currentPage="currentPage" @click="changePage(item[1])"/>
  </div>
</template>

<script>
import SideBarItem from './UI/SideBarItem.vue'
  export default {
  components: { SideBarItem },
    name: 'side-bar-list',

    data() {
      return {
        navArray: [['Home', 'Главная'], ['Ticket', 'Билеты'], ['Hire', 'Прокат'], ['School', 'Школа'], ['Star', 'Развлечения'], ['Hotel', 'Отели'], ['Restaurant', 'Рестораны'], ['Shop', 'Магазины'], ['Kids', 'Детям'], ['Parking', 'Паркинг']],
        currentPage: 'Главная'
      }
    },

    methods: {
      changePage(item) {
        this.currentPage = item
      }
    }

  }
</script>

<style lang="scss" scoped>

.side-bar-list {
  width: 300px;
  padding-left: 12px;
  transition: all 0.5s ease;
  overflow-x: hidden;
}

.side-bar__item:hover {
  color: #75B6F2;
}

.active__list {
  padding-left: 0;
  transition: all 0.5s ease;
}

</style>