<template>
  <div class="home">
    <!-- Post -->
    <article class="post" v-for="project in projects" :key="project.id">
      <header>
        <div class="title">
          <h2><router-link :to="'/portfolio/' + project.id">{{ project.name }}</router-link></h2>
          <p>{{ project.category }}</p>
        </div>
        <div class="meta">
          <time class="published" datetime="2026-04-01">April 1, 2026</time>
          <a href="#" class="author"><span class="name">Jane Doe</span><img src="../assets/vue.svg" alt="" /></a>
        </div>
      </header>
      <router-link :to="'/portfolio/' + project.id" class="image featured">
        <div class="placeholder-featured">{{ project.name }} 預覽圖</div>
      </router-link>
      <p>{{ project.description }}</p>
      <footer>
        <ul class="actions">
          <li><router-link :to="'/portfolio/' + project.id" class="button large">繼續閱讀</router-link></li>
        </ul>
        <ul class="stats">
          <li><a href="#">General</a></li>
          <li><a href="#" class="icon solid bi bi-heart-fill"> 28</a></li>
          <li><a href="#" class="icon solid bi bi-chat-dots-fill"> 128</a></li>
        </ul>
      </footer>
    </article>

    <!-- Pagination -->
    <ul class="actions pagination">
      <li><a href="" class="disabled button large previous">上一頁</a></li>
      <li><a href="#" class="button large next">下一頁</a></li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    id: 1,
    name: '電商平台',
    category: 'Web Development',
    description: '這是一個現代化的電商網站，具有完整的購物功能和支付整合。我們採用了最新的 Vue 3 技術棧，並結合了 Node.js 後端，為使用者提供流暢的購物體驗。'
  },
  {
    id: 2,
    name: '任務管理應用',
    category: 'App Design',
    description: '協作型任務管理工具，支援即時同步和團隊功能。這款應用程式旨在提高團隊的工作效率，透過直觀的介面讓任務分配與進度追蹤變得前所未有的簡單。'
  },
  {
    id: 3,
    name: '部落格平台',
    category: 'Content Management',
    description: '內容管理系統，提供豐富的編輯功能和主題自訂。無論是個人部落格還是企業新聞發佈，這套系統都能滿足您對內容呈現的所有想像。'
  }
]);
</script>

<style scoped lang="scss">
@import '../assets/styles.scss';

.placeholder-featured {
  height: 25rem;
  background-color: var(--color-bg-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  border: solid 1px var(--color-border);

  @media (max-width: 736px) {
    height: 15rem;
    font-size: 1rem;
  }
}

.pagination {
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin-top: 3rem;

  .disabled {
    pointer-events: none;
    opacity: 0.5;
  }
}
</style>
