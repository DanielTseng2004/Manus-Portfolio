<template>
  <header id="header">
    <h1><router-link to="/">Future Imperfect</router-link></h1>
    <nav class="links">
      <ul>
        <li><router-link to="/">首頁</router-link></li>
        <li><router-link to="/about">關於我</router-link></li>
        <li><router-link to="/portfolio">作品集</router-link></li>
        <li><router-link to="/contact">聯絡我</router-link></li>
      </ul>
    </nav>
    <nav class="main">
      <ul>
        <li class="theme-toggle-item">
          <a href="#" @click.prevent="toggleTheme" class="icon" :title="isDark ? '切換至淺色模式' : '切換至深色模式'">
            <i v-if="isDark" class="bi bi-sun-fill"></i>
            <i v-else class="bi bi-moon-stars-fill"></i>
          </a>
        </li>
        <li class="menu">
          <a class="fa-bars" href="#menu" @click.prevent="toggleMenu">選單</a>
        </li>
      </ul>
    </nav>

    <!-- 行動裝置選單 -->
    <section id="menu" :class="{ active: isMenuOpen }">
      <section>
        <ul class="links">
          <li>
            <router-link to="/" @click="closeMenu">
              <h3>首頁</h3>
              <p>回到首頁查看最新動態</p>
            </router-link>
          </li>
          <li>
            <router-link to="/about" @click="closeMenu">
              <h3>關於我</h3>
              <p>了解我的背景與經歷</p>
            </router-link>
          </li>
          <li>
            <router-link to="/portfolio" @click="closeMenu">
              <h3>作品集</h3>
              <p>探索我過去完成的專案</p>
            </router-link>
          </li>
          <li>
            <router-link to="/contact" @click="closeMenu">
              <h3>聯絡我</h3>
              <p>隨時與我保持聯繫</p>
            </router-link>
          </li>
        </ul>
      </section>
      <section>
        <ul class="actions stacked">
          <li><a href="#" @click.prevent="closeMenu" class="button large fit">關閉選單</a></li>
        </ul>
      </section>
    </section>
  </header>
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
@import '../../assets/styles.scss';

#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-bg);
  border-bottom: solid 1px var(--color-border);
  height: 3.5rem;
  line-height: 3.5rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000;
  padding: 0 1.5rem;

  h1 {
    font-size: 0.7rem;
    margin: 0;
    padding: 0 1rem;
    border-right: solid 1px var(--color-border);
    height: inherit;
    line-height: inherit;
    white-space: nowrap;

    a {
      border-bottom: 0;
      letter-spacing: 0.25rem;
      text-transform: uppercase;
      font-weight: 800;
    }
  }

  .links {
    flex: 1;
    border-right: solid 1px var(--color-border);
    height: inherit;
    line-height: inherit;
    margin-left: 1rem;

    @media (max-width: 980px) {
      display: none;
    }

    ul {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;

      li {
        padding: 0 0.75rem;
        
        a {
          border-bottom: 0;
          font-family: var(--font-family-sans);
          font-size: 0.6rem;
          font-weight: 400;
          letter-spacing: 0.15rem;
          text-transform: uppercase;
          color: var(--color-text-muted);

          &:hover, &.router-link-active {
            color: var(--color-accent);
          }
        }
      }
    }
  }

  .main {
    height: inherit;
    line-height: inherit;

    ul {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;

      li {
        border-left: solid 1px var(--color-border);
        padding: 0 1rem;

        a {
          border-bottom: 0;
          display: block;
          font-family: var(--font-family-sans);
          font-size: 0.6rem;
          font-weight: 400;
          letter-spacing: 0.15rem;
          text-transform: uppercase;
          color: var(--color-text-muted);

          &.icon {
            font-size: 1rem;
          }
        }
      }
    }
  }
}

#menu {
  background: var(--color-bg);
  border-left: solid 1px var(--color-border);
  box-shadow: none;
  height: 100%;
  max-width: 80%;
  position: fixed;
  right: 0;
  top: 0;
  width: 25rem;
  z-index: 10001;
  padding: 3rem;
  transform: translateX(100%);
  transition: transform 0.5s ease;
  overflow-y: auto;

  &.active {
    transform: translateX(0);
    box-shadow: -5px 0 20px var(--shadow-color);
  }

  .links {
    list-style: none;
    padding: 0;
    margin-bottom: 2rem;

    li {
      border-top: solid 1px var(--color-border);
      padding: 1.5rem 0;

      &:first-child {
        border-top: 0;
        padding-top: 0;
      }

      a {
        border-bottom: 0;
        display: block;

        h3 {
          font-size: 0.7rem;
          margin-bottom: 0.25rem;
          transition: color 0.2s ease;
        }

        p {
          font-size: 0.6rem;
          color: var(--color-text-muted);
          margin-bottom: 0;
          text-transform: uppercase;
          letter-spacing: 0.1rem;
        }

        &:hover h3 {
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
</style>
