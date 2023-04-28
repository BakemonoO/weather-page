<template>
  <div class="App">
    <side-bar/>

    <div class="app-main"
    @click.stop="$store.commit('closeSideBar')"
    :class="$store.state.sideBar ? 'side-bar-active' : ''"
    >
      <navigation/>

    <router-view style="flex-grow: 1"/>

    <app-footer/>
    </div>
    
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import Navigation from './components/Navigation.vue'
import SideBar from './components/SideBar.vue'
export default {
  components: { Navigation, AppFooter, SideBar },
  
  created() {
    this.$store.commit('getHashTableIcons')
  }

}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

.App {
  display: flex;
  min-height: 100vh;
  width: 100%;
  position: relative;
}

.app-main {
  width: calc(100% - 70px);
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease;
}

.navigation__menu_item {
  width: 50px;
  height: 50px;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .menu__line {
    width: 26px;
    height: 1px;
    background: #6D7784;
    border-radius: 1px;
    }
}

.navigation__menu_item:hover {
  .menu__line {
    background: #75B6F2;
  }
}

.side-bar-active {
  width: calc(100% - 300px);
  transition: all 0.5s ease;
}

@media (width < 1400px) {
  .side-bar-active, .app-main {
    width: 100%;
  }
}

</style>
