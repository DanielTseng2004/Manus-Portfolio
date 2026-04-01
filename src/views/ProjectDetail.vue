<template>
  <div class="project-detail" v-if="project">
    <article class="post">
      <header>
        <div class="title">
          <h2>{{ project.name }}</h2>
          <p>{{ project.category }}</p>
        </div>
        <div class="meta">
          <time class="published" datetime="2026-04-01">April 1, 2026</time>
          <a href="#" class="author"><span class="name">Jane Doe</span><img src="../assets/vue.svg" alt="" /></a>
        </div>
      </header>
      <span class="image featured"><div class="placeholder-featured">{{ project.name }} 預覽圖</div></span>
      
      <section>
        <h3>專案概述</h3>
        <p>{{ project.longDescription }}</p>
      </section>

      <hr />

      <section>
        <h3>技術細節</h3>
        <ul class="tech-list">
          <li v-for="tech in project.technologies" :key="tech">{{ tech }}</li>
        </ul>
      </section>

      <hr />

      <section>
        <h3>專案連結</h3>
        <ul class="actions">
          <li><a :href="project.demoUrl" target="_blank" class="button large">線上預覽</a></li>
          <li><a :href="project.repoUrl" target="_blank" class="button large">查看原始碼</a></li>
        </ul>
      </section>

      <footer>
        <ul class="actions">
          <li><router-link to="/portfolio" class="button large">返回作品集</router-link></li>
        </ul>
        <ul class="stats">
          <li><a href="#" class="icon solid bi bi-heart-fill"> 42</a></li>
          <li><a href="#" class="icon solid bi bi-chat-dots-fill"> 15</a></li>
        </ul>
      </footer>
    </article>
  </div>
  <div v-else class="container text-center py-lg">
    <article class="post">
      <h2>找不到該專案</h2>
      <router-link to="/portfolio" class="button large mt-md">返回作品集</router-link>
    </article>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const project = ref(null);

// 模擬資料庫
const projectsData = [
  {
    id: 1,
    name: '電商平台',
    category: 'Web Development',
    longDescription: '這是一個完整的電子商務解決方案，包含產品目錄、購物車、使用者認證以及 Stripe 支付整合。前端使用 Vue 3 搭配 Composition API，後端則使用 Node.js 和 MongoDB。',
    technologies: ['Vue 3', 'Vite', 'Pinia', 'Express', 'Mongoose', 'Stripe API'],
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: 2,
    name: '任務管理應用',
    category: 'App Design',
    longDescription: '專為團隊協作設計的任務管理工具。支援即時看板更新、任務分配、截止日期提醒以及檔案共享功能。',
    technologies: ['React', 'Firebase Firestore', 'Firebase Auth', 'Tailwind CSS'],
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: 3,
    name: '部落格平台',
    category: 'Content Management',
    longDescription: '一個高效能的內容管理系統，支援 Markdown 編輯、SEO 優化、評論系統以及自動化部署。',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth', 'Tailwind CSS'],
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: 4,
    name: '數據可視化儀表板',
    category: 'Data Analytics',
    longDescription: '將複雜的商業數據轉化為直觀的圖表。支援多種圖表類型、即時數據流更新以及自訂報表匯出。',
    technologies: ['Vue 3', 'D3.js', 'Chart.js', 'WebSockets'],
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: 5,
    name: '設計系統',
    category: 'UI/UX Design',
    longDescription: '為企業級應用建立的一套完整的 UI 元件庫和設計規範，確保不同產品之間的一致性。',
    technologies: ['Figma', 'Storybook', 'Styled Components', 'TypeScript'],
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: 6,
    name: '行動應用',
    category: 'Mobile Development',
    longDescription: '一款跨平台的行動應用程式，專注於提供流暢的使用者體驗和離線存取功能。',
    technologies: ['React Native', 'Expo', 'Redux Toolkit', 'SQLite'],
    demoUrl: '#',
    repoUrl: '#'
  }
];

onMounted(() => {
  const id = parseInt(route.params.id);
  project.value = projectsData.find(p => p.id === id);
});
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
}

hr {
  border: 0;
  border-bottom: solid 1px var(--color-border);
  margin: 3rem 0;
}

.tech-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  
  li {
    padding: 0.5rem 1rem;
    background: var(--color-bg-secondary);
    border: solid 1px var(--color-border);
    font-family: var(--font-family-sans);
    font-size: 0.7rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    text-align: center;
    color: var(--color-text-muted);
  }
}
</style>
