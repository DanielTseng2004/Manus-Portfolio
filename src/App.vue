<template>
  <div id="wrapper">
    <Navbar />
    <div id="main-container" class="container">
      <main id="main">
        <router-view />
      </main>
      <Sidebar v-if="showSidebar" />
    </div>
    <Footer v-if="!showSidebar" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from './components/layout/Navbar.vue';
import Footer from './components/layout/Footer.vue';
import Sidebar from './components/layout/Sidebar.vue';

const route = useRoute();

// 只有在首頁顯示側邊欄，其他頁面顯示傳統頁尾
const showSidebar = computed(() => {
  return route.path === '/';
});
</script>

<style lang="scss">
@import './assets/styles.scss';

#wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 3.5rem; // 為固定導覽列留出空間
}

#main-container {
  padding-top: 3rem;
  padding-bottom: 3rem;
  flex: 1;
}
</style>
