<template>
  <div class="project-detail" v-if="project">
    <section class="wrapper style1">
      <div class="inner">
        <h2 class="major">{{ project.name }}</h2>
        <p class="category">{{ project.category }}</p>
        
        <div class="placeholder-box large">{{ project.name }} 預覽圖</div>
        
        <section>
          <h3 class="major">專案概述</h3>
          <p>{{ project.longDescription }}</p>
        </section>

        <section>
          <h3 class="major">技術細節</h3>
          <ul class="tech-list">
            <li v-for="tech in project.technologies" :key="tech">{{ tech }}</li>
          </ul>
        </section>

        <section>
          <h3 class="major">專案連結</h3>
          <ul class="actions">
            <li><a :href="project.demoUrl" target="_blank" class="button primary large">線上預覽</a></li>
            <li><a :href="project.repoUrl" target="_blank" class="button large">查看原始碼</a></li>
          </ul>
        </section>

        <ul class="actions">
          <li><router-link to="/portfolio" class="button">返回作品集</router-link></li>
        </ul>
      </div>
    </section>
  </div>
  <div v-else class="container text-center py-lg">
    <section class="wrapper style1">
      <div class="inner">
        <h2 class="major">找不到該專案</h2>
        <router-link to="/portfolio" class="button primary large mt-md">返回作品集</router-link>
      </div>
    </section>
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
    longDescription: '為企業級應用建立的一套完整的 UI 元件庫 and 設計規範，確保不同產品之間的一致性。',
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

.project-detail {
  padding-top: 4rem;
}

.category {
  font-size: 0.9rem;
  color: var(--color-accent);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin-bottom: 2rem;
}

.placeholder-box.large {
  height: 30rem;
  margin-bottom: 4rem;
  font-size: 1.5rem;
  
  @media (max-width: 736px) {
    height: 15rem;
  }
}

.major {
  position: relative;
  padding-bottom: 1rem;
  margin-bottom: 2rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 3rem;
    height: 2px;
    background-image: var(--gradient-accent);
  }
}

.tech-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
  
  li {
    padding: 0.5rem 1.5rem;
    background: var(--color-bg-alt);
    border: solid 1px var(--color-border);
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    border-radius: 4px;
    color: var(--color-text);
  }
}

.actions {
  list-style: none;
  padding: 0;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}
</style>
