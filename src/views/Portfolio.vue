<template>
  <div class="portfolio">
    <header class="main-header">
      <h1>我的作品集</h1>
      <p>展示我過去完成的專案與設計作品</p>
    </header>

    <div class="grid grid-2">
      <article class="post mini-post" v-for="project in projects" :key="project.id">
        <header>
          <div class="title">
            <h3><router-link :to="'/portfolio/' + project.id">{{ project.name }}</router-link></h3>
            <p>{{ project.category }}</p>
          </div>
          <div class="meta">
            <time class="published" datetime="2026-04-01">April 1, 2026</time>
          </div>
        </header>
        <router-link :to="'/portfolio/' + project.id" class="image featured">
          <div class="placeholder-mini">{{ project.name }}</div>
        </router-link>
        <p class="description">{{ project.description }}</p>
        <footer>
          <ul class="actions">
            <li><router-link :to="'/portfolio/' + project.id" class="button">查看詳情</router-link></li>
          </ul>
        </footer>
      </article>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    id: 1,
    name: '電商平台',
    category: 'Web Development',
    description: '現代化的電商網站，具有完整的購物功能和支付整合。'
  },
  {
    id: 2,
    name: '任務管理應用',
    category: 'App Design',
    description: '協作型任務管理工具，支援即時同步和團隊功能。'
  },
  {
    id: 3,
    name: '部落格平台',
    category: 'Content Management',
    description: '內容管理系統，提供豐富的編輯功能和主題自訂。'
  },
  {
    id: 4,
    name: '數據可視化儀表板',
    category: 'Data Analytics',
    description: '實時數據分析儀表板，展示複雜的數據關係。'
  },
  {
    id: 5,
    name: '設計系統',
    category: 'UI/UX Design',
    description: '完整的設計系統和元件庫，用於企業應用。'
  },
  {
    id: 6,
    name: '行動應用',
    category: 'Mobile Development',
    description: '跨平台行動應用，提供優秀的使用者體驗。'
  }
]);
</script>

<style scoped lang="scss">
@import '../assets/styles.scss';

.main-header {
  text-align: center;
  margin-bottom: 4rem;
  border-bottom: solid 1px var(--color-border);
  padding-bottom: 2rem;
  
  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    color: var(--color-text-muted);
    margin-bottom: 0;
  }
}

.mini-post {
  padding: 2rem;
  margin-bottom: 0;
  
  header {
    margin: -2rem -2rem 2rem -2rem;
    padding: 2rem;
    
    .title h3 {
      font-size: 1rem;
      margin-bottom: 0.25rem;
    }
    
    .meta {
      margin-left: 1rem;
      min-width: 6rem;
    }
  }
  
  .placeholder-mini {
    height: 12rem;
    background-color: var(--color-bg-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-muted);
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    border: solid 1px var(--color-border);
  }
  
  .description {
    font-size: 0.9rem;
    margin-bottom: 2rem;
    height: 4.5rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  
  footer {
    margin-top: 0;
    justify-content: center;
  }
}
</style>
