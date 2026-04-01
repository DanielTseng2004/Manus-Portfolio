<template>
  <header id="header" :class="{ alt: isAlt }">
    <h1><router-link to="/">Solid State</router-link></h1>
    <nav>
      <a href="#menu" @click.prevent="toggleMenu">選單</a>
    </nav>

    <!-- 側邊選單 -->
    <nav id="menu" :class="{ active: isMenuOpen }">
      <div class="inner">
        <h2>選單</h2>
        <ul class="links">
          <li><router-link to="/" @click="closeMenu">首頁</router-link></li>
          <li><router-link to="/about" @click="closeMenu">關於我</router-link></li>
          <li><router-link to="/portfolio" @click="closeMenu">作品集</router-link></li>
          <li><router-link to="/contact" @click="closeMenu">聯絡我</router-link></li>
        </ul>
        <ul class="actions stacked">
          <li><a href="#" @click.prevent="toggleTheme" class="button primary fit">{{ isDark ? '切換至淺色模式' : '切換至深色模式' }}</a></li>
          <li><a href="#" @click.prevent="closeMenu" class="button fit">關閉</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const isDark = ref(true);
const isAlt = ref(true);

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

const handleScroll = () => {
  isAlt.value = window.scrollY < 100;
};

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  isDark.value = savedTheme === 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped lang="scss">
@import '../../assets/styles.scss';

#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-bg);
  color: var(--color-text);
  height: 3.5rem;
  line-height: 3.5rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000;
  padding: 0 1.5rem;
  transition: background-color 0.3s ease;

  @media (max-width: 736px) {
    height: 3rem;
    line-height: 3rem;
    padding: 0 1rem;
  }

  &.alt {
    background-color: transparent;
  }

  h1 {
    font-size: 0.8rem;
    margin: 0;
    letter-spacing: 0.25rem;
    text-transform: uppercase;
    font-weight: 700;
    white-space: nowrap;

    @media (max-width: 480px) {
      font-size: 0.7rem;
      letter-spacing: 0.15rem;
    }

    a {
      border-bottom: 0;
      color: inherit;
    }
  }

  nav {
    a {
      border-bottom: 0;
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      color: inherit;
      
      @media (max-width: 480px) {
        font-size: 0.7rem;
        letter-spacing: 0.1rem;
      }

      &::before {
        content: '≡';
        margin-right: 0.5rem;
        font-size: 1.2rem;
        vertical-align: middle;
      }
    }
  }
}

#menu {
  background-color: var(--color-bg-alt);
  height: 100%;
  max-width: 100%; // 行動裝置上允許全寬
  position: fixed;
  right: 0;
  top: 0;
  width: 25rem;
  z-index: 10001;
  padding: 3rem;
  transform: translateX(100%);
  transition: transform 0.5s ease;
  overflow-y: auto;
  box-shadow: -5px 0 20px var(--shadow-color);

  @media (max-width: 736px) {
    width: 100%; // 手機上全螢幕選單
    padding: 2rem;
  }

  &.active {
    transform: translateX(0);
  }

  .inner {
    h2 {
      font-size: 1.5rem;
      border-bottom: solid 2px var(--color-border);
      padding-bottom: 1rem;
      margin-bottom: 2rem;

      @media (max-width: 736px) {
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
      }
    }

    .links {
      list-style: none;
      padding: 0;
      margin-bottom: 3rem;

      li {
        border-top: solid 1px var(--color-border);
        padding: 1rem 0;

        &:first-child {
          border-top: 0;
          padding-top: 0;
        }

        a {
          border-bottom: 0;
          display: block;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2rem;
          color: var(--color-text);

          &:hover {
            color: var(--color-accent);
          }
        }
      }
    }

    .actions.stacked {
      list-style: none;
      padding: 0;
      
      li {
        margin-bottom: 1rem;
      }
      
      .button.fit {
        width: 100%;
      }
    }
  }
}
</style>
