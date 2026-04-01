<template>
  <div id="page-wrapper">
    <Navbar />
    <main id="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/layout/Navbar.vue';
import Footer from './components/layout/Footer.vue';
</script>

<style lang="scss">
@import './assets/styles.scss';

#page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#main-content {
  flex: 1;
}
</style>
