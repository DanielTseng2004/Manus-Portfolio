<template>
  <nav class="navbar">
    <div class="container navbar-container">
      <div class="navbar-brand">
        <router-link to="/" class="logo">
          <span class="logo-text">Portfolio</span>
        </router-link>
      </div>
      
      <div class="navbar-actions">
        <!-- 深色模式切換按鈕 -->
        <button class="theme-toggle" @click="toggleTheme" :title="isDark ? '切換至淺色模式' : '切換至深色模式'">
          <i v-if="isDark" class="bi bi-sun-fill"></i>
          <i v-else class="bi bi-moon-stars-fill"></i>
        </button>

        <button class="navbar-toggle" @click="toggleMenu" :class="{ active: isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <ul class="navbar-menu" :class="{ active: isMenuOpen }">
        <li class="navbar-item">
          <router-link to="/" class="navbar-link" @click="closeMenu">首頁</router-link>
        </li>
        <li class="navbar-item">
          <router-link to="/about" class="navbar-link" @click="closeMenu">關於我</router-link>
        </li>
        <li class="navbar-item">
          <router-link to="/portfolio" class="navbar-link" @click="closeMenu">作品集</router-link>
        </li>
        <li class="navbar-item">
          <router-link to="/contact" class="navbar-link" @click="closeMenu">聯絡我</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isMenuOpen = ref(false);
const isDark = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const toggleTheme = () => {
  isDark.value = !isDark.value;
  const theme = isDark.value ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
};

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  isDark.value = savedTheme === 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
});
</script>

<style scoped lang="scss">
@use "sass:color";
@import '../../assets/styles.scss';

.navbar {
  background-color: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px var(--shadow-color);
  transition: background-color $transition-base, border-color $transition-base;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-accent);
  letter-spacing: -0.5px;
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color $transition-base, color $transition-base;

  &:hover {
    background-color: var(--color-bg-secondary);
    color: var(--color-accent);
  }
}

.navbar-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: var(--color-bg);
    padding: 1rem;
    gap: 0.5rem;
    max-height: 0;
    overflow: hidden;
    transition: max-height $transition-base;
    border-bottom: 1px solid var(--color-border);

    &.active {
      max-height: 500px;
    }
  }
}

.navbar-link {
  color: var(--color-text);
  font-weight: 500;
  text-decoration: none;
  transition: color $transition-base;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-accent);
    transition: width $transition-base;
  }

  &:hover,
  &.router-link-active {
    color: var(--color-accent);
    &::after { width: 100%; }
  }
}

.navbar-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  gap: 5px;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    width: 24px;
    height: 2px;
    background-color: var(--color-text);
    border-radius: 2px;
    transition: all $transition-base;
  }

  &.active {
    span:nth-child(1) { transform: rotate(45deg) translate(8px, 8px); }
    span:nth-child(2) { opacity: 0; }
    span:nth-child(3) { transform: rotate(-45deg) translate(7px, -7px); }
  }
}
</style>
